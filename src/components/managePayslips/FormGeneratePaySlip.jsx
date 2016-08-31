import React from 'react';
import * as _ from 'lodash'

import { DateField } from 'react-date-picker'
import 'react-date-picker/index.css'

class FormGeneratePaySlip extends React.Component {
    constructor( props ){
      super( props );
      this.state = {
        user_id : "",
        year : "",
        month : "",
        name : "",
        designation : "",
        joining_date : "",
        total_working_days : "",
        days_present : "",
        paid_leaves : "",
        unpaid_leaves : "",
        total_leave_taken : "",
        allocated_leaves : "",
        leave_balance : "",
        final_leave_balance : "",
        basic : "",
        epf : "",
        hra : "",
        loan : "",
        conveyance : "",
        advance : "",
        medical_allowance : "",
        misc_deduction : "",
        special_allowance : "",
        tds : "",
        arrear : "",
        bonus : "",
        total_earning : "",
        total_deduction : "",
        net_salary : "",
      }
    }
    componentDidUpdate(){
      let e_basic = this.state.basic
      let e_hra = this.state.hra
      let e_conveyance = this.state.conveyance
      let e_medical_allowance = this.state.medical_allowance
      let e_special_allowance = this.state.special_allowance
      let e_arrear = this.state.arrear
      let e_bonus = this.state.bonus
      let n_total_earning = +e_basic + +e_hra + +e_conveyance + +e_medical_allowance + +e_special_allowance + +e_arrear + +e_bonus

      let e_epf = this.state.epf
      let e_loan = this.state.loan
      let e_advance = this.state.advance
      let e_misc_deduction = this.state.misc_deduction
      let e_tds = this.state.tds
      let n_total_deduction = +e_epf + +e_loan + +e_advance + +e_misc_deduction + +e_tds

      let n_net_salary = n_total_earning - n_total_deduction

      if( n_net_salary != this.state.net_salary ){
        this.setState({
          total_earning : n_total_earning,
          total_deduction : n_total_deduction,
          net_salary : n_net_salary
        })
      }
        
    }
    
    componentWillReceiveProps( props ){
      let user_id = ""
      let year = ""
      let month = ""
      let name = ""
      let designation = ""
      let joining_date = ""
      let total_working_days = 0
      let days_present = 0
      let paid_leaves = 0
      let unpaid_leaves = 0
      let total_leave_taken = 0
      let allocated_leaves = 0
      let leave_balance = 0
      let final_leave_balance = 0
      let basic = 0
      let epf = 0
      let hra = 0
      let loan = 0
      let conveyance = 0
      let advance = 0
      let medical_allowance = 0
      let misc_deduction = 0
      let special_allowance = 0
      let tds = 0
      let arrear = 0
      let bonus = 0
      let total_earning = 0
      let total_deduction = 0
      let net_salary = 0

      if( typeof this.props.user_id != 'undefined' ){
        user_id = this.props.user_id
      }
      if( typeof this.props.name != 'undefined' ){
        name = this.props.name
      }
      if( typeof this.props.designation != 'undefined' ){
        designation = this.props.designation
      }

      if( typeof props.user_data_for_payslip != 'undefined' ){ 

        //---info
        if( typeof props.user_data_for_payslip != 'undefined' ){ 
          let d = props.user_data_for_payslip

          if( typeof d.year != 'undefined' ){
            year = d.year
          }

          if( typeof d.month != 'undefined' ){
            month = d.month
          }

          if( typeof d.dateofjoining != 'undefined' ){
            joining_date = d.dateofjoining
          }
          if( typeof d.total_working_days != 'undefined' ){
            total_working_days = d.total_working_days
          }
          if( typeof d.paid_leaves != 'undefined' ){
            paid_leaves = d.paid_leaves
          }

          //total_leave_taken

          if( typeof d.total_leave_taken != 'undefined' ){
            total_leave_taken = d.total_leave_taken
          }
          if( typeof d.leave_balance != 'undefined' ){
            leave_balance = d.leave_balance
          }
          if( typeof d.paid_leaves != 'undefined' ){
            paid_leaves = d.paid_leaves
          }
          if( typeof d.final_leave_balance != 'undefined' ){
            final_leave_balance = d.final_leave_balance
          }
          

          if( typeof d.leaves_allocated != 'undefined' ){
            allocated_leaves = d.leaves_allocated
          }
          if( typeof d.unpaid_leaves != 'undefined' ){
            unpaid_leaves = d.unpaid_leaves
          }
          if( typeof d.days_present != 'undefined' ){
            days_present = d.days_present
          }
          if( typeof d.net_salary != 'undefined' ){
            net_salary = d.net_salary
          }
          if( typeof d.total_earning != 'undefined' ){
            total_earning = d.total_earning
          }
          if( typeof d.total_deduction != 'undefined' ){
            total_deduction = d.total_deduction
          }

        }        

        //---salary
        if( typeof props.user_data_for_payslip.salary_detail != 'undefined' ){ 
          let SalaryDetails = props.user_data_for_payslip.salary_detail

          
          if( typeof SalaryDetails.Basic != 'undefined' ){
            basic = SalaryDetails.Basic
          }
          if( typeof SalaryDetails.EPF != 'undefined' ){
            epf = SalaryDetails.EPF
          }
          if( typeof SalaryDetails.HRA != 'undefined' ){
            hra = SalaryDetails.HRA
          }
          if( typeof SalaryDetails.Loan != 'undefined' ){
            loan = SalaryDetails.Loan
          }
          if( typeof SalaryDetails.Conveyance != 'undefined' ){
            conveyance = SalaryDetails.Conveyance
          }
          if( typeof SalaryDetails.Advance != 'undefined' ){
            advance = SalaryDetails.Advance
          }
          if( typeof SalaryDetails.Medical_Allowance != 'undefined' ){
            medical_allowance = SalaryDetails.Medical_Allowance
          }
          if( typeof SalaryDetails.Misc_Deductions != 'undefined' ){
            misc_deduction = SalaryDetails.Misc_Deductions
          }
          if( typeof SalaryDetails.Special_Allowance != 'undefined' ){
            special_allowance = SalaryDetails.Special_Allowance
          }
          if( typeof SalaryDetails.TDS != 'undefined' ){
            tds = SalaryDetails.TDS
          }
          if( typeof SalaryDetails.Arrears != 'undefined' ){
            arrear = SalaryDetails.Arrears
          }
        }

      }

      this.setState({
        user_id : user_id,
        name : name,
        year : year,
        month : month,
        designation : designation,
        joining_date : joining_date,
        total_working_days : total_working_days,
        days_present : days_present,
        paid_leaves : paid_leaves,
        unpaid_leaves : unpaid_leaves,
        total_leave_taken : total_leave_taken,
        allocated_leaves : allocated_leaves,
        leave_balance : leave_balance,
        final_leave_balance : final_leave_balance,        
        basic : basic,
        epf : epf,
        hra : hra,
        loan : loan,
        conveyance : conveyance,
        advance : advance,
        medical_allowance : medical_allowance,
        misc_deduction : misc_deduction,
        special_allowance : special_allowance,
        tds : tds,
        arrear : arrear,
        bonus : bonus,
        total_earning : total_earning,
        total_deduction : total_deduction,
        net_salary : net_salary
      })
    }

    render(){
      let styles = _.cloneDeep(this.constructor.styles);

      let date = this.state.applicable_from

      return (
        <div className="row no-gutter">

          <div className="row no-gutter">
            
            <div className="col-xs-6 p-r">
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Year</div>
                <div className="col-xs-6 p-r">

                  <select ref="year" value={this.state.year} onChange={ (e) => this.setState({ year : this.refs.year.value }) }>
                    <option value=''>--Select Year--</option>
                    <option value='2016'>2016</option>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2021</option>
                  </select>
                  
                </div>
              </div>
              
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Employee Name</div>
                <div className="col-xs-6 p-r">
                  {this.state.name}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Designation</div>
                <div className="col-xs-6 p-r">
                  {this.state.designation}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Total Working Days</div>
                <div className="col-xs-6 p-r">
                  {this.state.total_working_days}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Paid Leave Taken</div>
                <div className="col-xs-6 p-r">
                  {this.state.paid_leaves}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Total Leave Taken</div>
                <div className="col-xs-6 p-r">
                  {this.state.total_leave_taken}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Previous Leave Balance</div>
                <div className="col-xs-6 p-r">
                  {this.state.leave_balance}
                </div>
              </div>
            </div>


            <div className="col-xs-6 p-r">

              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Month</div>
                <div className="col-xs-6 p-r">

                  <select ref="month" value={this.state.month} onChange={ (e) => this.setState({ month : this.refs.month.value }) }>
                    <option value=''>--Select Month--</option>
                    <option value='01'>Janaury</option>
                    <option value='02'>February</option>
                    <option value='03'>March</option>
                    <option value='04'>April</option>
                    <option value='05'>May</option>
                    <option value='06'>June</option>
                    <option value='07'>July</option>
                    <option value='08'>August</option>
                    <option value='09'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                </div>
              </div>


              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Joining Date</div>
                <div className="col-xs-6 p-r">
                  {this.state.joining_date}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Days Present</div>
                <div className="col-xs-6 p-r">
                  {this.state.days_present}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Leave Without Pay</div>
                <div className="col-xs-6 p-r">
                  {this.state.unpaid_leaves}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Leave Accumulated</div>
                <div className="col-xs-6 p-r">
                  {this.state.allocated_leaves}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Final Leave Balance</div>
                <div className="col-xs-6 p-r">
                  {this.state.final_leave_balance}
                </div>
              </div>
            </div>
          </div>
          
          <br/>

          <div className="row no-gutter">
            
            <div className="col-xs-6 p-r">
              <h6 className="text-center"><u>Earnings</u></h6>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Basic</div>
                <div className="col-xs-6 p-r">
                  {this.state.basic}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">HRA</div>
                <div className="col-xs-6 p-r">
                  {this.state.hra}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Conveyance</div>
                <div className="col-xs-6 p-r">
                  {this.state.conveyance}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Medical Allowance</div>
                <div className="col-xs-6 p-r">
                  {this.state.medical_allowance}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Special Allowance</div>
                <div className="col-xs-6 p-r">
                  {this.state.special_allowance}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Arrears</div>
                <div className="col-xs-6 p-r">
                  {this.state.arrear}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Bonus</div>
                <div className="col-xs-6 p-r">
                  <input
                    type="text"
                    value={this.state.bonus}
                    ref="bonus" 
                    onChange={ () => this.setState({ bonus : this.refs.bonus.value }) }
                  />
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r"><h5>Total Earnings</h5></div>
                <div className="col-xs-6 p-r">
                  <h5>{this.state.total_earning}</h5>
                </div>
              </div>
              <br/>
              <br/>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r"><h3>Net Salary</h3></div>
                <div className="col-xs-6 p-r">
                  <h3>{this.state.net_salary}</h3>
                </div>
              </div>
            </div>


            <div className="col-xs-6 p-r">
              <h6 className="text-center"><u>Deductions</u></h6>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">EPF</div>
                <div className="col-xs-6 p-r">
                  {this.state.epf}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Loan</div>
                <div className="col-xs-6 p-r">
                  {this.state.loan}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Advance</div>
                <div className="col-xs-6 p-r">
                  {this.state.advance}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">Misc Deductions</div>
                <div className="col-xs-6 p-r">
                  <input
                    type="text"
                    value={this.state.misc_deduction}
                    ref="misc_deduction" 
                    onChange={ () => this.setState({ misc_deduction : this.refs.misc_deduction.value }) }
                  />
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r">TDS</div>
                <div className="col-xs-6 p-r">
                  {this.state.tds}
                </div>
              </div>
              <div className="row no-gutter p-t">
                <div className="col-xs-6 p-r"><h5>Total Deductions</h5></div>
                <div className="col-xs-6 p-r">
                  <h5>{this.state.total_deduction}</h5>
                </div>
              </div>
            </div>


          </div>


          

          <div className="row no-gutter  p-t">
            <div className="col-xs-12 p-r">
              <button className="col-xs-12 md-btn md-raised indigo" onClick={ () => this.props.callCreateUserPayslip( this.state ) } >Create Payslip</button>
            </div>
          </div>
        </div>
      )
    }
}

FormGeneratePaySlip.styles = {
  leaveDiv: {
    'marginBottom' : '10px'
  }
};



export default FormGeneratePaySlip

