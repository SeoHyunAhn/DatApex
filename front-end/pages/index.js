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

export default () => (
  <div>
    <Row>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'labsel' }}>
          <Card title="Labsel Encoding">
            <p>Card content</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'one-hot' }}>
          <Card title="One-hot Encoding">
            <p>Card content</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'delete-rc' }}>
          <Card title="Delete Row/Column">
            <p>Card content</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'replaceW' }}>
          <Card title="Replace W">
            <p>Card content</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'certain' }}>
          <Card title="Select Certain">
            <p>Card content</p>
          </Card>
        </Link>
      </Col>

    </Row>
  </div>

)
