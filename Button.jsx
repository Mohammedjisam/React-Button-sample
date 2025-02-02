export default function Button() {
  const styles = {
    backgroundColor: 'hsl(200, 100%, 50%)', // camelCase for properties, quotes for string values
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return <button style={styles}>Click Me</button>;
}
