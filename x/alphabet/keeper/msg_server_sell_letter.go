package keeper

import (
	"context"

	"alphabet/x/alphabet/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SellLetter(goCtx context.Context, msg *types.MsgSellLetter) (*types.MsgSellLetterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSellLetterResponse{}, nil
}
