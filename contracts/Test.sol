pragma solidity >=0.4.22 <0.8.0;

contract Test {
    event Sum(
        uint256 indexed sum
    );
    
    function sum(
        uint256 a,
        uint256 b
    ) public returns (uint256) {
        uint256 c = a * b;
        emit Sum(c);
        return c;
    }
}
