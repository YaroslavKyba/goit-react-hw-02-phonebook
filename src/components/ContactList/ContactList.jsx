import css from './ContactList.module.css';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul>
      {contacts?.map(({ name, id, number }) => {
        return (
          <li name={name} key={id} className={css.listItem}>
            {name}: {number}
            <button
              onClick={() => {
                ondeleteContact(id);
              }}
              className={css.listBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { ContactList };
