package alphabet_test

import (
	"testing"

	keepertest "alphabet/testutil/keeper"
	"alphabet/testutil/nullify"
	"alphabet/x/alphabet"
	"alphabet/x/alphabet/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.AlphabetKeeper(t)
	alphabet.InitGenesis(ctx, *k, genesisState)
	got := alphabet.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
