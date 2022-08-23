package simulation

import (
	"math/rand"

	"alphabet/x/alphabet/keeper"
	"alphabet/x/alphabet/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgSellLetter(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSellLetter{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SellLetter simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SellLetter simulation not implemented"), nil, nil
	}
}
