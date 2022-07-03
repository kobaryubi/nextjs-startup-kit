import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
  increment,
  decrement
} from '@/features/counter/counterSlice'
//   incrementByAmount,
//   incrementAsync,

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount);
  // const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter;
