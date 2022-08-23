package keeper_test

import (
	"strconv"
	"testing"

	keepertest "alphabet/testutil/keeper"
	"alphabet/testutil/nullify"
	"alphabet/x/alphabet/keeper"
	"alphabet/x/alphabet/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNLetter(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Letter {
	items := make([]types.Letter, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLetter(ctx, items[i])
	}
	return items
}

func TestLetterGet(t *testing.T) {
	keeper, ctx := keepertest.AlphabetKeeper(t)
	items := createNLetter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLetter(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLetterRemove(t *testing.T) {
	keeper, ctx := keepertest.AlphabetKeeper(t)
	items := createNLetter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLetter(ctx,
			item.Index,
		)
		_, found := keeper.GetLetter(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLetterGetAll(t *testing.T) {
	keeper, ctx := keepertest.AlphabetKeeper(t)
	items := createNLetter(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLetter(ctx)),
	)
}
