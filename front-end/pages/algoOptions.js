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
        <Link route='mlalgo' params={{ path: 'nba' }}>
          <Card title="Naive Bayes algorithm">
            <p>Probabilistic classifier that makes classifications using the 
                Maximum A Posteriori decision rule in a Bayesian setting</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='mlalgo' params={{ path: 'lra' }}>
          <Card title="Logistic Regression algorithm">
            <p>Predictive analysis algorithm and based on the concept of probability</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='mlalgo' params={{ path: 'svm' }}>
          <Card title="Support Vector Machine algorithm">
            <p>Find a hyperplane in an N-dimensional space
                that distinctly classifies the data points.</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='mlalgo' params={{ path: 'bag' }}>
          <Card title="Bagging algorithm">
              <p>aka. Bootstrap aggregating</p>
            <p>Improve the stability and accuracy of machine learning 
                algorithms used in statistical classification and regression.</p>
          </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Link route='mlalgo' params={{ path: 'clus' }}>
          <Card title="Clustering algorithm">
            <p>Grouping a set of objects in a way that objects in the same group are more similar
             to each other than to those in other groups</p>
          </Card>
        </Link>
      </Col>

    </Row>
  </div>

)
