export default function randomId(prefix = "nova_") {
    return (
      prefix + Date.now() + "_" + Math.floor(Math.random() * 9999999999)
    );
};