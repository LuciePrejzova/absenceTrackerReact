import Attendance from "./Attendance"

const AttendanceList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-yellowGreen px-4 py-2">
            <th >Datum</th>
            <th>Stav</th>
            <th>Pocet nahrad</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Attendance/>
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceList
