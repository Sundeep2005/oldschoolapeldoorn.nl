export default function ContactLine({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3">
      {Icon ? (
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#71805f]" />
      ) : (
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#71805f]" />
      )}
      <div>
        <dt className="font-bold text-[#1f211d]">{label}</dt>
        <dd className="mt-0.5 leading-6">{value}</dd>
      </div>
    </div>
  )
}
