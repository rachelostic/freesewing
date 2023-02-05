import { useTranslation } from 'next-i18next'

export const CutLayout = (props) => {
  const { t } = useTranslation(['workbench'])

  let name = props.design.designConfig.data.name
  name = name.replace('@freesewing/', '')
  return (
    <div>
      <h2 className="capitalize">{t('layoutThing', { thing: name }) + ': ' + t('forCutting')}</h2>
      <Settings {...props} />
    </div>
  )
}
