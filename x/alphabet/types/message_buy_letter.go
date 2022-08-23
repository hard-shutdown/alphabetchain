package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyLetter = "buy_letter"

var _ sdk.Msg = &MsgBuyLetter{}

func NewMsgBuyLetter(creator string, letter string, amount string) *MsgBuyLetter {
	return &MsgBuyLetter{
		Creator: creator,
		Letter:  letter,
		Amount:  amount,
	}
}

func (msg *MsgBuyLetter) Route() string {
	return RouterKey
}

func (msg *MsgBuyLetter) Type() string {
	return TypeMsgBuyLetter
}

func (msg *MsgBuyLetter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyLetter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyLetter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
