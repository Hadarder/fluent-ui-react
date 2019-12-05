import * as React from 'react'
import { FontIcon as IconFabric, initializeIcons } from 'office-ui-fabric-react'
import { Icon as IconFluent } from '@fluentui/react'

initializeIcons()

export const Fabric = () => <IconFabric iconName="cancel" />
export const Fluent = () => <IconFluent name="close" />
