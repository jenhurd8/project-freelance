import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFreelancerPost } from '../../../../ducks/freelancerReducer';
import { addEmployerPost } from '../../../../ducks/employerReducer';
import { getUser } from '../../../../ducks/userReducer';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      specialty: 0,
      price: 0,
      open: false
    };
  }

  componentDidMount() {
    let userRole = this.props.user[0] && this.props.user[0].role;
    // console.log(this.props.user[0] && this.props.user[0].role);
    this.props.getUser();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSpecialtyChange = specialty => event => {
    this.setState({
      [specialty]: event.target.value
    });
  };

  render() {
    const { title, body, specialty, price } = this.state;
    // console.log(this.props.user[0] && this.props.user[0].id);

    return (
      <div>
        <button onClick={() => console.log(this.state)} />

        {/* create freelancer posting */}

        {this.props.user[0] &&
          this.props.user[0].role === 'Freelancer' && (
            <div>
              <div className="freelancer__posting">
                <h2>Create Freelancer Posting</h2>
                <form>
                  <div>
                    <TextField
                      id="Title"
                      label="Title"
                      className={'freelancer__post__title__input'}
                      value={title}
                      onChange={e => this.setState({ title: e.target.value })}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <TextField
                      id="Description"
                      label="Description"
                      className={'freelancer__post__body__input'}
                      value={body}
                      onChange={e => this.setState({ body: e.target.value })}
                      margin="normal"
                    />
                  </div>
                  <button
                    onClick={() => {
                      this.props.addFreelancerPost(
                        title,
                        body,
                        this.props.user[0] && this.props.user[0].id
                      );
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

        {/* create employer posting */}

        {this.props.user[0] &&
          this.props.user[0].role === 'Employer' && (
            <div>
              <div className="employer__posting">
                <h2>Create Job Posting</h2>
                <form>
                  <div>
                    <TextField
                      id="Title"
                      label="Title"
                      className={'employer__post__title__input'}
                      value={title}
                      onChange={e => this.setState({ title: e.target.value })}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <TextField
                      id="Description"
                      label="Description"
                      className={'employer__post__body__input'}
                      value={body}
                      onChange={e => this.setState({ body: e.target.value })}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <FormControl className={'form'}>
                      <NativeSelect
                        className={'employer__post__specialty__input'}
                        value={specialty}
                        name="specialty"
                        onChange={this.handleSpecialtyChange('specialty')}
                      >
                        <option value="" disabled />
                        <option value={'Select One'}> </option>
                        <option value={'Developer'}> Developer </option>
                        <option value={'Designer'}> Designer </option>
                      </NativeSelect>
                      <FormHelperText>Specialty</FormHelperText>
                    </FormControl>
                  </div>

                  <div>
                    <TextField
                      id="Description"
                      label="Price $"
                      className={'employer__post__price__input'}
                      value={price}
                      onChange={e => this.setState({ price: e.target.value })}
                      margin="normal"
                    />
                  </div>
                  <button
                    onClick={() => {
                      this.props.addEmployerPost(
                        title,
                        body,
                        specialty,
                        price,
                        this.props.user[0] && this.props.user[0].id
                      );
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    freelancerPosts: state.freelancerReducer.freelancerPosts,
    employerPosts: state.employerReducer.employerPosts,
    user: state.userReducer.user
  };
}
export default connect(
  mapStateToProps,
  { addFreelancerPost, addEmployerPost, getUser }
)(Post);
