package keeper

import (
	"context"

	"alphabet/x/alphabet/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) SellLetter(goCtx context.Context, msg *types.MsgSellLetter) (*types.MsgSellLetterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting name information from the store
	letter, isFound := k.GetLetter(ctx, msg.Letter)

	// If a name is not found, throw an error
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Name doesn't exist")
	}

	// If the message sender address doesn't match the name owner, throw an error
	if !(letter.Owner == msg.Creator) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}

	// Otherwise, remove the name information from the store
	k.RemoveLetter(ctx, msg.Letter)
	return &types.MsgSellLetterResponse{}, nil
}
