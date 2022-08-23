package keeper

import (
	"context"

	"alphabet/x/alphabet/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) LetterAll(c context.Context, req *types.QueryAllLetterRequest) (*types.QueryAllLetterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var letters []types.Letter
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	letterStore := prefix.NewStore(store, types.KeyPrefix(types.LetterKeyPrefix))

	pageRes, err := query.Paginate(letterStore, req.Pagination, func(key []byte, value []byte) error {
		var letter types.Letter
		if err := k.cdc.Unmarshal(value, &letter); err != nil {
			return err
		}

		letters = append(letters, letter)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLetterResponse{Letter: letters, Pagination: pageRes}, nil
}

func (k Keeper) Letter(c context.Context, req *types.QueryGetLetterRequest) (*types.QueryGetLetterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLetter(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetLetterResponse{Letter: val}, nil
}
