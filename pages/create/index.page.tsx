import React, { useState } from 'react';
import Link from 'next/link';
import styles from './CreateResume.module.scss';
import Shapes from '../../components/Icons/Shapes';
import Button from '../../components/Button/Button';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.notfound}>
        <Shapes />
        <div className={styles.copy}>
          <h1>You don&#39;t have a resume yet. Create one now.</h1>
          <Button style="primary">
            <Link href="/create/personal" style={{ color: 'white ' }}>
              Create resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
