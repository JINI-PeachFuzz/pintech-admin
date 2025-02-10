import React from 'react'
import ConfigContainer from '../../containers/ConfigContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'

const EditPage = ({ params }) => {
  // params : pagecomponent의 첫번째 매개변수를 넣어주는데 이걸 가지고 초기데이터를 가져올 수 있음
  const { bid } = params // 게시판 데이터를 가져와여 하기 때문에 / ...bid로 넣을 수 도 있음 / 경로변수가 길어서 하위경로까지 넣을 때
  return (
    <>
      <MainTitle>게시판 설정 수정</MainTitle>
      <ConfigContainer bid={bid} />
    </>
  )
}

export default React.memo(EditPage)
