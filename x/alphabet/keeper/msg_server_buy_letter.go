package keeper

import (
	"context"

	"alphabet/x/alphabet/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) BuyLetter(goCtx context.Context, msg *types.MsgBuyLetter) (*types.MsgBuyLetterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBuyLetterResponse{}, nil
}
