import { Link, Router } from '../routes'
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Card, Row, Col
} from 'antd'
import Head from "./header"

export default () => (
  <div>
    <Head />
    <Link route='procOptions'>
      <Button type="primary" block>
        Pre process Data
      </Button>
    </Link>
    <p></p>
    <Link route='algoOptions'>
      <Button type="primary" block>
        ML algorithm
      </Button>
    </Link>
  </div>
)
