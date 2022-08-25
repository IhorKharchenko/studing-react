// import { Form } from 'formik';
import { Component } from 'react';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { Form } from './Form/Form';
// import { LoginForm } from './LoginForm/LoginForm';
import { Modal } from './Modal/Modal';
// import { TodoList } from './TodoList/TodoList';
export class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div>
        {/* <LoginForm />
        <Counter />
        <Dropdown />
        <Form /> */}
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}

        {/* <TodoList /> */}
      </div>
    );
  }
}