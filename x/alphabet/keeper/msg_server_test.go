package keeper_test

import (
	"context"
	"testing"

	keepertest "alphabet/testutil/keeper"
	"alphabet/x/alphabet/keeper"
	"alphabet/x/alphabet/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.AlphabetKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
