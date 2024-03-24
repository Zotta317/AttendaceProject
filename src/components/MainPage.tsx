import { Box, Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { MdImportExport } from "react-icons/md";
import NavigationBar from "./NavigationBar";

interface Employee {
    firstname: string;
    lastname: string;
    department: string;
    points: number;
}

export default function MainPage() {

    const initialEmployees: Employee[] = [
        { firstname: "John", lastname: "Doe", department: "HR", points: 75.5 },
        { firstname: "Jane", lastname: "Smith", department: "Evenimente", points: 88.2 },
        { firstname: "Michael", lastname: "Johnson", department: "Evenimente", points: 92.7 },
        { firstname: "Emily", lastname: "Williams", department: "Imagini si Piar", points: 80.1 },
        { firstname: "David", lastname: "Brown", department: "Relatii externe", points: 85.6 }
    ];

    const [sortedFirstNamesAsc, setSortedFirstNamesAsc] = useState(true);
    const [sortedLastNamesAsc, setSortedLastNamesAsc] = useState(true);
    const [employees, setEmployees] = useState(initialEmployees);

    const [sortedPoints, setSortedPoints] = useState(false);

    const departamente = ["Departamente","HR", "Evenimente", "Relatii externe", "Imagini si Piar"]
    const [selectedDepartament, setSelectedDepartament] = useState("Departamente")
   
    function sortedByName() {
        if (sortedFirstNamesAsc) {
            const sortedNames = [...employees].sort((a, b) => {
                return a.firstname > b.firstname ? 1 : -1;
            })
            setEmployees(sortedNames);
            setSortedFirstNamesAsc(false);
            console.log(sortedFirstNamesAsc);
        } else {
            const sortedNames = [...employees].sort((a, b) => {
                return a.firstname > b.firstname ? -1 : 1;
            })
            setEmployees(sortedNames)
            setSortedFirstNamesAsc(true)
        }
    }

    function sortedByLastName() {
        if (sortedLastNamesAsc) {
            const sortedNames = [...employees].slice().sort((a, b) => {
                return a.lastname.localeCompare(b.lastname);
            })
            setEmployees(sortedNames);
            setSortedLastNamesAsc(false);
        } else {
            const sortedNames = [...employees].slice().sort((a, b) => {
                return b.lastname.localeCompare(a.lastname);
            })
            setEmployees(sortedNames)
            setSortedLastNamesAsc(true)
        }
    }

    function sortedEventByName() {
        if (sortedLastNamesAsc) {
            const sortedNames = [...employees].slice().sort((a, b) => {
                return a.department.localeCompare(b.department);
            })
            setEmployees(sortedNames);
            setSortedLastNamesAsc(false);
        } else {
            const sortedNames = [...employees].slice().sort((a, b) => {
                return b.department.localeCompare(a.department);
            })
            setEmployees(sortedNames)
            setSortedLastNamesAsc(true)
        }
    }


    const sortEmployeesByPoints = () => {
        if (sortedPoints) {
            const sortedEmployees = [...employees].sort((a, b) => a.points - b.points);
            setEmployees(sortedEmployees);
            setSortedPoints(false);
        } else {
            const sortedEmployees = [...employees].sort((a, b) => b.points - a.points);
            setEmployees(sortedEmployees);
            setSortedPoints(true);
        }
    };
    function selectDepartament(selected : any) {
        const filteredEmployees = selected !== "Departamente" ? [...initialEmployees].filter(d => d.department == selected) : [...initialEmployees]
        setEmployees (filteredEmployees);
        setSelectedDepartament(selected)
    }
    return (
        <>
            <NavigationBar />
            <Box marginTop={10}></Box>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <caption>Volunteer Data</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nume  Prenume<Button onClick={sortedByName}><MdImportExport size={22} /></Button></TableCell>
                            <TableCell>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Departamente"
                                    style={{ width: '70%', border: "none" }}
                                    value={selectedDepartament}
                                    onChange={(event) => selectDepartament(event.target.value)}
                                >
                        
                                    {departamente?.map((departament, index) => (
                                        <MenuItem key={index} value={departament.toString()}>
                                            {departament}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <Button onClick={sortedEventByName}><MdImportExport size={22} /></Button>
                            </TableCell>
                            <TableCell>Points <Button onClick={sortEmployeesByPoints}><MdImportExport size={22} /></Button></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {employees.map((employe, index) => (
                            <TableRow key={index}>
                                <TableCell>{employe.firstname +" " + employe.lastname}</TableCell>
                                <TableCell>{employe.department}</TableCell>
                                <TableCell>{employe.points} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}