/* eslint-disable react/prop-types */
export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Lu belum punya barang untuk dipacking, buruan tambahin sekarang! 🚀</em>
      </footer>
    )
  }

  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {
          percentage === 100
            ? `Semua barang udah dipacking, siap untuk berangkat liburan ✈️`
            : `💼 Lu punya ${items.length} barang di list, dan lu udah packing barang lu sebanyak ${numPacked} (${percentage}%) `
        }
      </em>
    </footer>
  )
}
