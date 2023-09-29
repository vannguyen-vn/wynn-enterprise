'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { client } from '../contenful/Api';

const Footer = () => {
  const [dataFooter, setDataFooter] = useState<any | null>(null);
  const currentYear: any = new Date().getFullYear();

  useEffect(() => {
    client.getEntry('1xjyAo1SYqqnmlymX9ODSg')
      .then(entries => {
        setDataFooter(entries.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="links">
              {dataFooter && dataFooter.footerMenu.map((menu: any) => <li key={menu?.sys.id}><a href={menu?.fields.url} target="_blank" rel='noreferrer'>{menu?.fields.name}</a></li>)}
            </ul>
          </div>
          <div className="col-sm-6">
            <div className="contact-info">
              <p className="location">{dataFooter?.nameResort}<br />
                {dataFooter?.address}<br />
                <a href={`tel: ${dataFooter?.phone}`}>{dataFooter?.phone}</a></p>
              <div className="social">
                <p>Connect with us.</p>
                <ul className="social-icons">
                  {dataFooter && dataFooter.socialLink.map((link: any) => <li key={link?.sys.id}><a aria-label={link.fields.description} href={link.fields.url} target="_blank" className="social-icon" rel='noreferrer'><Image className="facebookIcon" src="/images/facebook-icon.svg" alt="Wynn Las Vegas on Facebook" width="15" height="15" /><i className={`bi ${link.fields.iconClass}`}></i></a></li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-footer"><a href="https://www.wynnlasvegas.com/" target="_blank" rel="noreferrer">
          <Image alt={dataFooter?.wynnLogo?.fields.description} src={'https:' + dataFooter?.wynnLogo?.fields.file.url} width={133} height={60} /></a></div>
        <p className="copyright">&copy; {currentYear} Wynn Resorts Holdings, LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer