import RecruitmentForm from './RecruitmentForm/RecruitmentForm.jsx'
import PurchaseDepartment from './PurchaseDepartment/PurchaseDepartment.jsx'
import AssuranceLogiciel from './AssuranceLogiciel/AssuranceLogiciel.jsx'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <RecruitmentForm />
      </div>

      <div className="bottom-section">
        <div className="right-panel">
          <PurchaseDepartment />
        </div>
        <div className="left-panel">
          <AssuranceLogiciel />
        </div>
      </div>
    </div>
  )
}

export default App
