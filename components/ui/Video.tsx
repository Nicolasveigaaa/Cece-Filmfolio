export function Video() {
  return (
    <video
      width='100%'
      height='100%'
      controls
      preload='none'
      muted
      loop
      className='object-cover'
    >
      <source src='/videoer/bg-video.mov' type='video/mov' />
    </video>
  );
}
