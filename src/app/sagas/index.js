import {exampleSaga} from './example/example';

export default function* rootSaga() {
    yield [
        exampleSaga()
    ]
}