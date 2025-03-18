import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://notes2notion.notionify.net'
        className='underline justify-start'>
        NotesToNotion
      </a>
      .
    </div>
  )
}
