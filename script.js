function markAttendence() {
    const attendanceInput = document.getElementById("attendance").value;
    const attendanceArr = attendanceInput.split(",").map((str) => str.trim());

    //check wheather the number of inputs matches the no of students
    if (attendanceArr.length !== 3) {
        alert("Invalid attendance! Enter the attendance of all the students");
        return;
    }

    //Check if the values are valid(present or absent)
    if (!attendanceArr.every(
            (value) => value === "Present" || value === "Absent" || value === "Late"
        )) {
        alert("Invalid attendance! Enter either Present or Absent or Late");
        return;
    }

    //Update Attendance in the table
    document.getElementById("Rahul-attendance").textContent = attendanceArr[0];
    document.getElementById("Bhuva-attendance").textContent = attendanceArr[1];
    document.getElementById("alex-attendance").textContent = attendanceArr[2];

    //Clear the attendance input field
    document.getElementById("attendance").value = "";
}