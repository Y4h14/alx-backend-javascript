export default function guardrail(mathFuntion) {
  const queue = [];
  try {
    const result = mathFuntion();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
