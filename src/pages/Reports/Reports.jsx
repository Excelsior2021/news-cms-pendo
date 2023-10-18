import ReportItem from "../../components/ReportItem/ReportItem"
import { company } from "../../App"
import reports from "../../data/reports"
import "./Report.scss"

const Reports = () => {
  const companyReports = reports.filter(
    report => report.companyId === company().id
  )

  return (
    <div class="reports">
      <h1 class="reports__heading">Reports</h1>
      <ul class="reports__list">
        <For each={companyReports}>
          {report => <ReportItem report={report} />}
        </For>
      </ul>
    </div>
  )
}

export default Reports
