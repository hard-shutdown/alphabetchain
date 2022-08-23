package keeper

import (
	"context"

	"alphabet/x/alphabet/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyLetter(goCtx context.Context, msg *types.MsgBuyLetter) (*types.MsgBuyLetterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting a name from the store
	letter, isFound := k.GetLetter(ctx, msg.Letter)

	// Set the price at which the name has to be bought if it didn't have an owner before
	minPrice := sdk.Coins{sdk.NewInt64Coin("token", 1)}

	// Convert price and bid strings to sdk.Coins
	price, _ := sdk.ParseCoinsNormalized(letter.Price)
	bid, _ := sdk.ParseCoinsNormalized(msg.Amount)

	// Convert owner and buyer address strings to sdk.AccAddress
	owner, _ := sdk.AccAddressFromBech32(letter.Owner)
	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

	// If a name is found in store
	if isFound {
		// If the current price is higher than the bid
		if price.IsAllGT(bid) {
			// Throw an error
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Bid is not high enough")
		}

		// Otherwise (when the bid is higher), send tokens from the buyer to the owner
		k.bankKeeper.SendCoins(ctx, buyer, owner, bid)
	} else {

		if minPrice.IsAllGT(bid) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Bid is less than min amount")
		}

		k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, bid)
	}

	newLetter := types.Letter{
		Index:  msg.Letter,
		Letter: msg.Letter,
		Price:  bid.String(),
		Owner:  buyer.String(),
	}

	k.SetLetter(ctx, newLetter)
	return &types.MsgBuyLetterResponse{}, nil
}
