package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LetterKeyPrefix is the prefix to retrieve all Letter
	LetterKeyPrefix = "Letter/value/"
)

// LetterKey returns the store key to retrieve a Letter from the index fields
func LetterKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
