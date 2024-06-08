export default function guardrail(mathFuntion) {
  const queue = [];
  try {
    queue.push(mathFuntion());
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
