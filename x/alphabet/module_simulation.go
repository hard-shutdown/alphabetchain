package alphabet

import (
	"math/rand"

	"alphabet/testutil/sample"
	alphabetsimulation "alphabet/x/alphabet/simulation"
	"alphabet/x/alphabet/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = alphabetsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgBuyLetter = "op_weight_msg_buy_letter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyLetter int = 100

	opWeightMsgSellLetter = "op_weight_msg_sell_letter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSellLetter int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	alphabetGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&alphabetGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgBuyLetter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyLetter, &weightMsgBuyLetter, nil,
		func(_ *rand.Rand) {
			weightMsgBuyLetter = defaultWeightMsgBuyLetter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyLetter,
		alphabetsimulation.SimulateMsgBuyLetter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSellLetter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSellLetter, &weightMsgSellLetter, nil,
		func(_ *rand.Rand) {
			weightMsgSellLetter = defaultWeightMsgSellLetter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSellLetter,
		alphabetsimulation.SimulateMsgSellLetter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
