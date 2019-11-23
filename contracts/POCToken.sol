pragma solidity ^0.5.0;

import "./Context.sol";
import "./ERC20.sol";
import "./ERC20Detailed.sol";
import "./ERC20Mintable.sol";
import "./ERC20Pausable.sol";
import "./ERC20Burnable.sol";

/**
 * @title POCToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract POCToken is Context, ERC20, ERC20Detailed, ERC20Mintable, ERC20Pausable, ERC20Burnable {

    /**
     * @dev Constructor that gives _msgSender() all of existing tokens.
     */
    constructor (string memory name, string memory symbol, uint8 decimals, uint256 totalSupply) public ERC20Detailed(name, symbol, decimals) {
        _mint(_msgSender(), totalSupply * (10 ** uint(decimals)));
    }
}
