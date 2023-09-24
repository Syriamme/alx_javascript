#!/usr/bin/node
//Closure and Loops

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    const students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        const seatNumber = i + 1;
        const getSeat = studentSeat(seatNumber);
        students.push(getSeat);
    }

    return students;
}

const classRoom = createClassRoom(10);
