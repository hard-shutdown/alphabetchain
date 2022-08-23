package keeper

import (
	"alphabet/x/alphabet/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetLetter set a specific letter in the store from its index
func (k Keeper) SetLetter(ctx sdk.Context, letter types.Letter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LetterKeyPrefix))
	b := k.cdc.MustMarshal(&letter)
	store.Set(types.LetterKey(
		letter.Index,
	), b)
}

// GetLetter returns a letter from its index
func (k Keeper) GetLetter(
	ctx sdk.Context,
	index string,

) (val types.Letter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LetterKeyPrefix))

	b := store.Get(types.LetterKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLetter removes a letter from the store
func (k Keeper) RemoveLetter(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LetterKeyPrefix))
	store.Delete(types.LetterKey(
		index,
	))
}

// GetAllLetter returns all letter
func (k Keeper) GetAllLetter(ctx sdk.Context) (list []types.Letter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LetterKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Letter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
