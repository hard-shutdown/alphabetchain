package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSellLetter = "sell_letter"

var _ sdk.Msg = &MsgSellLetter{}

func NewMsgSellLetter(creator string, letter string) *MsgSellLetter {
	return &MsgSellLetter{
		Creator: creator,
		Letter:  letter,
	}
}

func (msg *MsgSellLetter) Route() string {
	return RouterKey
}

func (msg *MsgSellLetter) Type() string {
	return TypeMsgSellLetter
}

func (msg *MsgSellLetter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSellLetter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellLetter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
