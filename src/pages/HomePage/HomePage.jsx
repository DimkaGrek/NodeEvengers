import { EditBoardForm } from '../../components/EditBoardForm/EditBoardForm';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import s from './HomePage.module.css';

const HomePage = () => {
  const [isModalAddBoard, toggleIsModalAddBoard] = useModal();

  return (
    <>
      <div className={s.pageWrapper}>
        <p className={s.text}>
          Before starting your project, it is essential{' '}
          <span className={s.highlightedText} onClick={toggleIsModalAddBoard}>
            to create a board
          </span>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div>
      {isModalAddBoard && (
        <Modal toggleModal={toggleIsModalAddBoard} title="New board">
          <EditBoardForm />
        </Modal>
      )}
    </>
  );
};

export default HomePage;