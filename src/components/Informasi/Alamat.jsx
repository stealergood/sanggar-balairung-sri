
export const Alamat = () => {
  return (
    <div className='w-full h-[800px] md:h-[1024px] bg-motif-android2 md:bg-motif2 bg-cover bg-center px-5 md:px-10 pb-16'>
      <div className='w-full flex justify-center font-blenda text-primary text-4xl md:text-6xl py-10'>
        <h1>Alamat</h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-5 text-black font-medium text-xl text-center'>
        <iframe
          className='rounded-xl md:w-[600px] lg:w-[800px] h-[400px] md:h-[450px] lg:h-[480px]'
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4276172447867!2d102.05842067363064!3d0.8018405991903778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d42751eff5e6f9%3A0x471f229ab44df973!2sJl.%20Suak%20Lanjut%2C%20Kec.%20Siak%2C%20Kabupaten%20Siak%2C%20Riau!5e0!3m2!1sen!2sid!4v1720941482709!5m2!1sen!2sid">
        </iframe>
        <p>JL. Suak Lanjut kecamatan Siak, Kabupaten Siak Sri Indrapura, Provinsi Riau</p>
      </div>
    </div>
  )
}