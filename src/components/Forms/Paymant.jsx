import React from "react";
import { Component } from "react";
import "../../assets/css/Paymant.css"
class Card extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return(
        <div 
          className={`card-pay ${this.props.processing ? 'processing' : ''} ${this.props.complete ? 'complete' : ''}`}
          >
          <div className={`back ${this.props.flipped ? 'active': ''}`}>
            <div className='decoration'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='band'></div>
            <div className='cvv'>
              { this.props.fields.cvv.length > 0
                ? (<span>{this.props.fields.cvv}</span>)
                : (<span className='default'>123</span>)
              }
            </div>
          </div>
          <div className={`front ${this.props.flipped ? '' : 'active'}`}>
            <div className='decoration'>
              <span></span>
              <span></span>
              <span></span>  
            </div>
            <div className='type'>CREDIT CARD</div>
            <div className='chip'>
              <span></span><span></span><span></span>
            </div>
            <div className='rowPay info'>
              <div>
                <div className='rowPay number'>
                  { this.props.fields.number.length > 0
                    ? (<span>{this.props.fields.number}</span>)
                    : (<span className='default'>0000 0000 0000 0000</span>)
                  }
                </div>
                <div className='rowPay expiration'>
                  <div className='label'>VALID THRU</div>
                  <div className='date'>
                    { this.props.fields.month.length > 0
                      ? (<span>{this.props.fields.month}</span>)
                      : (<span className='default'>01</span>)
                    }
                    { this.props.fields.month.length > 0 && this.props.fields.year.length > 0
                      ? (<span>/</span>)
                      : (<span className='default'>/</span>)
                    }
                    { this.props.fields.year.length > 0
                      ? (<span>{this.props.fields.year}</span>)
                      : (<span className='default'>17</span>)
                    }
                  </div>
                </div>
                <div className='rowPay name'>
                  { this.props.fields.name.length > 0
                    ? (<span>{this.props.fields.name}</span>)
                    : (<span className='default'>PAUL M ATREIDES</span>)
                  }
                </div>
              </div>
              <div className='flag'><span></span><span></span></div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  class Form extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        loading: false
      }
    }
    
    flip(bool) {
      this.props.onFlip(bool);
    }
    
    handleSubmit(event) {
      document.activeElement.blur();
      event.preventDefault();
      console.log('ok');
      this.props.addUser()
      
      this.props.onFormSubmit();
    }
    
    format(type, input, event) {
      let value = input.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      
      switch(type) {
        case 'card-number':
          value = value.replace(/\D/g, '');
          input.value = value.replace(/([0-9]{4})\B/g, '$1 ');
          
          if(input.value != value) {
            setTimeout(() => input.setSelectionRange(input.value.length + 1, input.value.length + 1), 0);
          }
          
          this.props.onFormInput({ number: input.value })
          break;
          
        case 'card-name':
          input.value = value.replace(/\d*/g, '');
          this.props.onFormInput({ name: input.value })
          break;
          
        case 'card-month':
          this.props.onFormInput({ month: input[input.selectedIndex].value })
          break;
          
        case 'card-year':
          this.props.onFormInput({ year: input[input.selectedIndex].value })
          break;
          
        case 'card-cvv':
          input.value = value.replace(/\D/g, '');
          this.props.onFormInput({ cvv: input.value })
          break;
      }
    }
    
    render() {
      return(
        <div>
          { !this.props.processing
            ? (
                <form  className="form-pay"
                  ref={(form) => this.form = form}
                  onSubmit={this.handleSubmit.bind(this)}
                  >
                  <div className='details'>
                    <h1>Payment details</h1>
                    <div className='group'>
                      <label htmlFor='card-number'>CARD NUMBER</label>
                      <input 
                        type='text'
                        id='card-number' 
                        placeholder='0000 0000 0000 0000'
                        pattern='[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}'
                        maxLength='19'
                        ref={(input) => this.cardNumber = input}
                        onInput={(event) => this.format('card-number', this.cardNumber, event)}
                        onFocus={() => this.flip(false)}
                        required
                        />
                    </div>
                    <div className='group'>
                      <label htmlFor='card-name'>CARDHOLDER NAME</label>
                      <input 
                        id='card-name' 
                        placeholder='PAUL M ATREIDES'
                        ref={(input) => this.cardName = input}
                        onInput={(event) => this.format('card-name', this.cardName, event)}
                        onFocus={() => this.flip(false)}
                        required
                        />
                    </div>
                    <div className='rowPay'>
                      <div className='group'>
                        <label htmlFor='card-validity'>VALID THROUGH</label>
                        <div className='validity'>
                          <select 
                            ref={(select) => this.cardMonth = select}
                            onChange={(event) => this.format('card-month', this.cardMonth, event)}
                            onFocus={() => this.flip(false)}
                            required 
                            >
                            <option value='' selected hidden>Month</option>
                            <optgroup label='Month'>
                              {(new Array(12)).fill(1).map((el, index) => {
                                return (
                                  <option 
                                    key={`month-${index}`} 
                                    value={`${index + 1 < 10 ? `0${index + 1}` : index + 1}`}
                                    >
                                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                  </option>
                                );
                              })}
                            </optgroup>
                          </select>
                          <select 
                            ref={(select) => this.cardYear = select}
                            onChange={(event) => this.format('card-year', this.cardYear, event)}
                            onFocus={() => this.flip(false)}
                            required
                            >
                            <option value='' selected hidden>Year</option>
                            <optgroup label='Year'>
                              {(new Array(12)).fill(1).map((el, index) => {
                                return (
                                  <option 
                                    key={`month-${index + parseInt(`${(new Date()).getFullYear()}`.slice(2, 4))}`} 
                                    value={`${index + parseInt(`${(new Date()).getFullYear()}`.slice(2, 4))}`}
                                    >
                                    {index + parseInt(`${(new Date()).getFullYear()}`.slice(2, 4))}
                                  </option>
                                );
                              })}
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className='group'>
                        <label htmlFor='card-cvv'>CVV</label>
                        <input 
                          id='card-cvv' 
                          placeholder='123'
                          pattern='[0-9]{3}'
                          maxLength='3'
                          ref={(input) => this.cardCVV = input}
                          onInput={(event) => this.format('card-cvv', this.cardCVV, event)}
                          onFocus={() => this.flip(true)}
                          onBlur={() => this.flip(false)}
                          required
                          />
                      </div>
                    </div>
                    <div className='group'>
                      <button type='submit'>CHECKOUT</button>
                    </div>
                  </div>
                </form>
              )
            : (
                <div className='payment'>
                  { !this.props.complete
                    ? (
                        <div className='trying'>
                          <h3>Processing payment...</h3>
                          <div className='loader'>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      )
                    : (
                        <div>
                          <div className='success'>
                            <h4>Your payment was processed successfully!</h4>
                            <div className='check'>
                              <span></span><span></span>
                            </div>
                          </div>
                        </div>
                      )
                  }
                </div>
              ) 
          }
        </div>
      );
    }
  }
  
  class Machine extends React.Component {
    render() {
      return(
        <div className={`machine ${this.props.processing ? 'active' : ''} ${this.props.complete ? 'complete' : ''}`}>
          <div className='body'>
            <div className='visor'>
              <div className='screen'></div>
            </div>
            <div className='keypad'>
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      );
    }
  }
  
  class Checkoutpay extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        flipped: false,
        processing: false,
        complete: false,
        number: '',
        name: '',
        month: '',
        year: '',
        cvv: ''
      }
    }
    
    populate(field) {
      this.setState(field);
    }
    
    flip(bool) {
      this.setState({flipped: bool})
    }
    
    process() {
      
    }
    
    render() {
      return (
        <div className='container'>
          <div className='process'>
            <Machine 
              processing={this.state.processing}
              complete={this.state.complete}
              />
            <Card 
               
              fields={this.state} 
              flipped={this.state.flipped} 
              processing={this.state.processing}
              complete={this.state.complete}
              />
          </div>
          <Form 
           addUser = {this.props.addUser}
            processing={this.state.processing}
            complete={this.state.complete}
            onFormSubmit={() => {
              this.setState({ processing: true })
              
              setTimeout(() => {
                this.setState({ complete: true })
              }, 5000);
            }}
            onFormInput={this.populate.bind(this)} 
            onFlip={this.flip.bind(this)} 
            />
        </div>
      );
    }
  }
  
export default Checkoutpay