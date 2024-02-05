const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul>
      {contacts?.map(({ name, id, number }) => {
        return (
          <li name={name} key={id}>
            {name}: {number}
            <button
              onClick={() => {
                ondeleteContact(id);
              }}
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
