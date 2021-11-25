const Greetings = ({ lang, children }) => {
  const greetingContent = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div>
      <p>
        {greetingContent()} {children}
      </p>
    </div>
  );
};

export default Greetings;
