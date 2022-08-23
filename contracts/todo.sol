// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TodoList {
    // / A contract that allows users to write things  they want to do
    // / allows them to update and delete items in the list
    // / make a new list so the user can have a history of all list he/ she has created
    /// and the user pays a small fee for very list created (optional) ////////////////////////////////////

    struct Details {
        uint id;
        string title;
        string text;
    }

    mapping(address => Details[]) alldetails;

    uint ID;

    /// @dev events

    event inputedItems(address indexed owner, string _title, string _text);
    event updated(address indexed owner, string _title, string _text);

    function store(uint id) external {
        ID = id;
    }

    /// function  for inputing an element

    function input(string memory _title, string memory _text) external {
        Details[] storage details = alldetails[msg.sender];
        Details memory _details = Details(ID, _title, _text);
        details.push(_details);
        ID++;

        emit inputedItems(msg.sender, _title, _text);
    }

    /// function to update a particular index

    function updateItems(
        uint index,
        string memory _title,
        string memory _text
    ) external {
        alldetails[msg.sender][index].title = _title;
        alldetails[msg.sender][index].text = _text;

        emit updated(msg.sender, _title, _text);
    }

    /// function return a particular index in an array

    function getAParticularIndex(uint index)
        external
        view
        returns (Details memory)
    {
        return alldetails[msg.sender][index];
    }

    /// function all the items in the array
    function returnAlldetails() external view returns (Details[] memory) {
        return alldetails[msg.sender];
    }

    receive() external payable {}
}
