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
            <p>Converting the labels into numeric form so as to convert it into the machine-readable form</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'one-hot' }}>
          <Card title="One-hot Encoding">
            <p>Converting into a form that could be provided to ML algorithms to do a better job in prediction</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'delete-rc' }}>
          <Card title="Delete Row/Column">
            <p>Remove some information from row/column that is not needed for ML</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'replaceW' }}>
          <Card title="Replace W">
            <p>Remove white spaces for better processing of ML</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='preproc' params={{ path: 'certain' }}>
          <Card title="Select Certain">
            <p>Select some information from the provided data</p>
          </Card>
        </Link>
      </Col>

    </Row>
  </div>

)
