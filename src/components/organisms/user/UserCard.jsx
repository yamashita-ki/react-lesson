import styled from "styled-components"

export const UserCard = () => {
  return (
    <div>
      <img height={160} width={160} src="https://source.unsplash.com/Sg3XwuEpybU"  alt="プロフィール" />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>1111@gmail.com</dd>
        <dt>TEL</dt>
        <dd>1111@aaa.com</dd>
        <dt>会社名</dt>
        <dd>株式会社hoge</dd>
        <dt>WEB Site</dt>
        <dd>http:///</dd>
      </dl>
    </div>
  )
}