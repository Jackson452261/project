import { Button } from 'antd';

const RButton = ({ type, size, className, style, onClick, children, shape }) => {
  return(
    <Button
      type={'defalult'}
      style={style}
      className={className}
      onClick={onClick} 
      size={size}
      shape={shape}
    > {children}</Button>
  )
}
export default RButton
