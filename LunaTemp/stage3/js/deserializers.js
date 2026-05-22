var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5720 = root || request.c( 'UnityEngine.JointSpring' )
  var i5721 = data
  i5720.spring = i5721[0]
  i5720.damper = i5721[1]
  i5720.targetPosition = i5721[2]
  return i5720
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5722 = root || request.c( 'UnityEngine.JointMotor' )
  var i5723 = data
  i5722.m_TargetVelocity = i5723[0]
  i5722.m_Force = i5723[1]
  i5722.m_FreeSpin = i5723[2]
  return i5722
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5724 = root || request.c( 'UnityEngine.JointLimits' )
  var i5725 = data
  i5724.m_Min = i5725[0]
  i5724.m_Max = i5725[1]
  i5724.m_Bounciness = i5725[2]
  i5724.m_BounceMinVelocity = i5725[3]
  i5724.m_ContactDistance = i5725[4]
  i5724.minBounce = i5725[5]
  i5724.maxBounce = i5725[6]
  return i5724
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5726 = root || request.c( 'UnityEngine.JointDrive' )
  var i5727 = data
  i5726.m_PositionSpring = i5727[0]
  i5726.m_PositionDamper = i5727[1]
  i5726.m_MaximumForce = i5727[2]
  i5726.m_UseAcceleration = i5727[3]
  return i5726
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5728 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5729 = data
  i5728.m_Spring = i5729[0]
  i5728.m_Damper = i5729[1]
  return i5728
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5730 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5731 = data
  i5730.m_Limit = i5731[0]
  i5730.m_Bounciness = i5731[1]
  i5730.m_ContactDistance = i5731[2]
  return i5730
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5732 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5733 = data
  i5732.m_ExtremumSlip = i5733[0]
  i5732.m_ExtremumValue = i5733[1]
  i5732.m_AsymptoteSlip = i5733[2]
  i5732.m_AsymptoteValue = i5733[3]
  i5732.m_Stiffness = i5733[4]
  return i5732
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5734 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5735 = data
  i5734.m_LowerAngle = i5735[0]
  i5734.m_UpperAngle = i5735[1]
  return i5734
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5736 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5737 = data
  i5736.m_MotorSpeed = i5737[0]
  i5736.m_MaximumMotorTorque = i5737[1]
  return i5736
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5738 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5739 = data
  i5738.m_DampingRatio = i5739[0]
  i5738.m_Frequency = i5739[1]
  i5738.m_Angle = i5739[2]
  return i5738
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5740 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5741 = data
  i5740.m_LowerTranslation = i5741[0]
  i5740.m_UpperTranslation = i5741[1]
  return i5740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5743 = data
  i5742.name = i5743[0]
  i5742.width = i5743[1]
  i5742.height = i5743[2]
  i5742.mipmapCount = i5743[3]
  i5742.anisoLevel = i5743[4]
  i5742.filterMode = i5743[5]
  i5742.hdr = !!i5743[6]
  i5742.format = i5743[7]
  i5742.wrapMode = i5743[8]
  i5742.alphaIsTransparency = !!i5743[9]
  i5742.alphaSource = i5743[10]
  i5742.graphicsFormat = i5743[11]
  i5742.sRGBTexture = !!i5743[12]
  i5742.desiredColorSpace = i5743[13]
  i5742.wrapU = i5743[14]
  i5742.wrapV = i5743[15]
  return i5742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5745 = data
  i5744.position = new pc.Vec3( i5745[0], i5745[1], i5745[2] )
  i5744.scale = new pc.Vec3( i5745[3], i5745[4], i5745[5] )
  i5744.rotation = new pc.Quat(i5745[6], i5745[7], i5745[8], i5745[9])
  return i5744
}

Deserializers["Project.DraggableHex"] = function (request, data, root) {
  var i5746 = root || request.c( 'Project.DraggableHex' )
  var i5747 = data
  i5746.DragHeight = i5747[0]
  var i5749 = i5747[1]
  var i5748 = new (System.Collections.Generic.List$1(Bridge.ns('Project.HexTile')))
  for(var i = 0; i < i5749.length; i += 2) {
  request.r(i5749[i + 0], i5749[i + 1], 1, i5748, '')
  }
  i5746.Tiles = i5748
  i5746.RaycastLayerMask = UnityEngine.LayerMask.FromIntegerValue( i5747[2] )
  request.r(i5747[3], i5747[4], 0, i5746, 'Camera')
  i5746.DragSmoothSpeed = i5747[5]
  i5746.ReturnDuration = i5747[6]
  request.r(i5747[7], i5747[8], 0, i5746, '_gameManager')
  return i5746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5753 = data
  i5752.center = new pc.Vec3( i5753[0], i5753[1], i5753[2] )
  i5752.size = new pc.Vec3( i5753[3], i5753[4], i5753[5] )
  i5752.enabled = !!i5753[6]
  i5752.isTrigger = !!i5753[7]
  request.r(i5753[8], i5753[9], 0, i5752, 'material')
  return i5752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5755 = data
  request.r(i5755[0], i5755[1], 0, i5754, 'sharedMesh')
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5757 = data
  request.r(i5757[0], i5757[1], 0, i5756, 'additionalVertexStreams')
  i5756.enabled = !!i5757[2]
  request.r(i5757[3], i5757[4], 0, i5756, 'sharedMaterial')
  var i5759 = i5757[5]
  var i5758 = []
  for(var i = 0; i < i5759.length; i += 2) {
  request.r(i5759[i + 0], i5759[i + 1], 2, i5758, '')
  }
  i5756.sharedMaterials = i5758
  i5756.receiveShadows = !!i5757[6]
  i5756.shadowCastingMode = i5757[7]
  i5756.sortingLayerID = i5757[8]
  i5756.sortingOrder = i5757[9]
  i5756.lightmapIndex = i5757[10]
  i5756.lightmapSceneIndex = i5757[11]
  i5756.lightmapScaleOffset = new pc.Vec4( i5757[12], i5757[13], i5757[14], i5757[15] )
  i5756.lightProbeUsage = i5757[16]
  i5756.reflectionProbeUsage = i5757[17]
  return i5756
}

Deserializers["Project.HexTile"] = function (request, data, root) {
  var i5762 = root || request.c( 'Project.HexTile' )
  var i5763 = data
  i5762.ColorIndex = i5763[0]
  return i5762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5765 = data
  i5764.name = i5765[0]
  i5764.tagId = i5765[1]
  i5764.enabled = !!i5765[2]
  i5764.isStatic = !!i5765[3]
  i5764.layer = i5765[4]
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5767 = data
  i5766.name = i5767[0]
  i5766.halfPrecision = !!i5767[1]
  i5766.useSimplification = !!i5767[2]
  i5766.useUInt32IndexFormat = !!i5767[3]
  i5766.vertexCount = i5767[4]
  i5766.aabb = i5767[5]
  var i5769 = i5767[6]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( !!i5769[i + 0] );
  }
  i5766.streams = i5768
  i5766.vertices = i5767[7]
  var i5771 = i5767[8]
  var i5770 = []
  for(var i = 0; i < i5771.length; i += 1) {
    i5770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5771[i + 0]) );
  }
  i5766.subMeshes = i5770
  var i5773 = i5767[9]
  var i5772 = []
  for(var i = 0; i < i5773.length; i += 16) {
    i5772.push( new pc.Mat4().setData(i5773[i + 0], i5773[i + 1], i5773[i + 2], i5773[i + 3],  i5773[i + 4], i5773[i + 5], i5773[i + 6], i5773[i + 7],  i5773[i + 8], i5773[i + 9], i5773[i + 10], i5773[i + 11],  i5773[i + 12], i5773[i + 13], i5773[i + 14], i5773[i + 15]) );
  }
  i5766.bindposes = i5772
  var i5775 = i5767[10]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 1) {
    i5774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5775[i + 0]) );
  }
  i5766.blendShapes = i5774
  return i5766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5781 = data
  i5780.triangles = i5781[0]
  return i5780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5787 = data
  i5786.name = i5787[0]
  var i5789 = i5787[1]
  var i5788 = []
  for(var i = 0; i < i5789.length; i += 1) {
    i5788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5789[i + 0]) );
  }
  i5786.frames = i5788
  return i5786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5790 = root || new pc.UnityMaterial()
  var i5791 = data
  i5790.name = i5791[0]
  request.r(i5791[1], i5791[2], 0, i5790, 'shader')
  i5790.renderQueue = i5791[3]
  i5790.enableInstancing = !!i5791[4]
  var i5793 = i5791[5]
  var i5792 = []
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5793[i + 0]) );
  }
  i5790.floatParameters = i5792
  var i5795 = i5791[6]
  var i5794 = []
  for(var i = 0; i < i5795.length; i += 1) {
    i5794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5795[i + 0]) );
  }
  i5790.colorParameters = i5794
  var i5797 = i5791[7]
  var i5796 = []
  for(var i = 0; i < i5797.length; i += 1) {
    i5796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5797[i + 0]) );
  }
  i5790.vectorParameters = i5796
  var i5799 = i5791[8]
  var i5798 = []
  for(var i = 0; i < i5799.length; i += 1) {
    i5798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5799[i + 0]) );
  }
  i5790.textureParameters = i5798
  var i5801 = i5791[9]
  var i5800 = []
  for(var i = 0; i < i5801.length; i += 1) {
    i5800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5801[i + 0]) );
  }
  i5790.materialFlags = i5800
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5805 = data
  i5804.name = i5805[0]
  i5804.value = i5805[1]
  return i5804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5809 = data
  i5808.name = i5809[0]
  i5808.value = new pc.Color(i5809[1], i5809[2], i5809[3], i5809[4])
  return i5808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5813 = data
  i5812.name = i5813[0]
  i5812.value = new pc.Vec4( i5813[1], i5813[2], i5813[3], i5813[4] )
  return i5812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5817 = data
  i5816.name = i5817[0]
  request.r(i5817[1], i5817[2], 0, i5816, 'value')
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5821 = data
  i5820.name = i5821[0]
  i5820.enabled = !!i5821[1]
  return i5820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5823 = data
  i5822.name = i5823[0]
  i5822.index = i5823[1]
  i5822.startup = !!i5823[2]
  return i5822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5825 = data
  i5824.aspect = i5825[0]
  i5824.orthographic = !!i5825[1]
  i5824.orthographicSize = i5825[2]
  i5824.backgroundColor = new pc.Color(i5825[3], i5825[4], i5825[5], i5825[6])
  i5824.nearClipPlane = i5825[7]
  i5824.farClipPlane = i5825[8]
  i5824.fieldOfView = i5825[9]
  i5824.depth = i5825[10]
  i5824.clearFlags = i5825[11]
  i5824.cullingMask = i5825[12]
  i5824.rect = i5825[13]
  request.r(i5825[14], i5825[15], 0, i5824, 'targetTexture')
  i5824.usePhysicalProperties = !!i5825[16]
  i5824.focalLength = i5825[17]
  i5824.sensorSize = new pc.Vec2( i5825[18], i5825[19] )
  i5824.lensShift = new pc.Vec2( i5825[20], i5825[21] )
  i5824.gateFit = i5825[22]
  i5824.commandBufferCount = i5825[23]
  i5824.cameraType = i5825[24]
  i5824.enabled = !!i5825[25]
  return i5824
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i5826 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i5827 = data
  i5826.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i5827[0] )
  i5826.m_MaxRayIntersections = i5827[1]
  return i5826
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5828 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5829 = data
  request.r(i5829[0], i5829[1], 0, i5828, 'm_FirstSelected')
  i5828.m_sendNavigationEvents = !!i5829[2]
  i5828.m_DragThreshold = i5829[3]
  return i5828
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5830 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5831 = data
  i5830.m_HorizontalAxis = i5831[0]
  i5830.m_VerticalAxis = i5831[1]
  i5830.m_SubmitButton = i5831[2]
  i5830.m_CancelButton = i5831[3]
  i5830.m_InputActionsPerSecond = i5831[4]
  i5830.m_RepeatDelay = i5831[5]
  i5830.m_ForceModuleActive = !!i5831[6]
  i5830.m_SendPointerHoverToParent = !!i5831[7]
  return i5830
}

Deserializers["Project.GameManager"] = function (request, data, root) {
  var i5832 = root || request.c( 'Project.GameManager' )
  var i5833 = data
  request.r(i5833[0], i5833[1], 0, i5832, '_tutorialManager')
  request.r(i5833[2], i5833[3], 0, i5832, '_packshot')
  i5832._firstTutorialDelay = i5833[4]
  i5832._repeatedTutorialDelay = i5833[5]
  var i5835 = i5833[6]
  var i5834 = []
  for(var i = 0; i < i5835.length; i += 2) {
  request.r(i5835[i + 0], i5835[i + 1], 2, i5834, '')
  }
  i5832._draggableHexes = i5834
  return i5832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5839 = data
  i5838.pivot = new pc.Vec2( i5839[0], i5839[1] )
  i5838.anchorMin = new pc.Vec2( i5839[2], i5839[3] )
  i5838.anchorMax = new pc.Vec2( i5839[4], i5839[5] )
  i5838.sizeDelta = new pc.Vec2( i5839[6], i5839[7] )
  i5838.anchoredPosition3D = new pc.Vec3( i5839[8], i5839[9], i5839[10] )
  i5838.rotation = new pc.Quat(i5839[11], i5839[12], i5839[13], i5839[14])
  i5838.scale = new pc.Vec3( i5839[15], i5839[16], i5839[17] )
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5841 = data
  i5840.planeDistance = i5841[0]
  i5840.referencePixelsPerUnit = i5841[1]
  i5840.isFallbackOverlay = !!i5841[2]
  i5840.renderMode = i5841[3]
  i5840.renderOrder = i5841[4]
  i5840.sortingLayerName = i5841[5]
  i5840.sortingOrder = i5841[6]
  i5840.scaleFactor = i5841[7]
  request.r(i5841[8], i5841[9], 0, i5840, 'worldCamera')
  i5840.overrideSorting = !!i5841[10]
  i5840.pixelPerfect = !!i5841[11]
  i5840.targetDisplay = i5841[12]
  i5840.overridePixelPerfect = !!i5841[13]
  i5840.enabled = !!i5841[14]
  return i5840
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5842 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5843 = data
  i5842.m_UiScaleMode = i5843[0]
  i5842.m_ReferencePixelsPerUnit = i5843[1]
  i5842.m_ScaleFactor = i5843[2]
  i5842.m_ReferenceResolution = new pc.Vec2( i5843[3], i5843[4] )
  i5842.m_ScreenMatchMode = i5843[5]
  i5842.m_MatchWidthOrHeight = i5843[6]
  i5842.m_PhysicalUnit = i5843[7]
  i5842.m_FallbackScreenDPI = i5843[8]
  i5842.m_DefaultSpriteDPI = i5843[9]
  i5842.m_DynamicPixelsPerUnit = i5843[10]
  i5842.m_PresetInfoIsWorld = !!i5843[11]
  return i5842
}

Deserializers["Project.TutorialManager"] = function (request, data, root) {
  var i5844 = root || request.c( 'Project.TutorialManager' )
  var i5845 = data
  request.r(i5845[0], i5845[1], 0, i5844, '_animation')
  request.r(i5845[2], i5845[3], 0, i5844, '_hand')
  return i5844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i5846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i5847 = data
  i5846.playAutomatically = !!i5847[0]
  request.r(i5847[1], i5847[2], 0, i5846, 'clip')
  var i5849 = i5847[3]
  var i5848 = []
  for(var i = 0; i < i5849.length; i += 2) {
  request.r(i5849[i + 0], i5849[i + 1], 2, i5848, '')
  }
  i5846.clips = i5848
  i5846.wrapMode = i5847[4]
  i5846.enabled = !!i5847[5]
  return i5846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5853 = data
  i5852.cullTransparentMesh = !!i5853[0]
  return i5852
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5854 = root || request.c( 'UnityEngine.UI.Image' )
  var i5855 = data
  request.r(i5855[0], i5855[1], 0, i5854, 'm_Sprite')
  i5854.m_Type = i5855[2]
  i5854.m_PreserveAspect = !!i5855[3]
  i5854.m_FillCenter = !!i5855[4]
  i5854.m_FillMethod = i5855[5]
  i5854.m_FillAmount = i5855[6]
  i5854.m_FillClockwise = !!i5855[7]
  i5854.m_FillOrigin = i5855[8]
  i5854.m_UseSpriteMesh = !!i5855[9]
  i5854.m_PixelsPerUnitMultiplier = i5855[10]
  request.r(i5855[11], i5855[12], 0, i5854, 'm_Material')
  i5854.m_Maskable = !!i5855[13]
  i5854.m_Color = new pc.Color(i5855[14], i5855[15], i5855[16], i5855[17])
  i5854.m_RaycastTarget = !!i5855[18]
  i5854.m_RaycastPadding = new pc.Vec4( i5855[19], i5855[20], i5855[21], i5855[22] )
  return i5854
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5856 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5857 = data
  i5856.m_IgnoreReversedGraphics = !!i5857[0]
  i5856.m_BlockingObjects = i5857[1]
  i5856.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5857[2] )
  return i5856
}

Deserializers["Project.Packshot"] = function (request, data, root) {
  var i5858 = root || request.c( 'Project.Packshot' )
  var i5859 = data
  request.r(i5859[0], i5859[1], 0, i5858, '_canvasGroup')
  request.r(i5859[2], i5859[3], 0, i5858, '_playNow')
  return i5858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5861 = data
  i5860.m_Alpha = i5861[0]
  i5860.m_Interactable = !!i5861[1]
  i5860.m_BlocksRaycasts = !!i5861[2]
  i5860.m_IgnoreParentGroups = !!i5861[3]
  i5860.enabled = !!i5861[4]
  return i5860
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5862 = root || request.c( 'UnityEngine.UI.Button' )
  var i5863 = data
  i5862.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5863[0], i5862.m_OnClick)
  i5862.m_Navigation = request.d('UnityEngine.UI.Navigation', i5863[1], i5862.m_Navigation)
  i5862.m_Transition = i5863[2]
  i5862.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5863[3], i5862.m_Colors)
  i5862.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5863[4], i5862.m_SpriteState)
  i5862.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5863[5], i5862.m_AnimationTriggers)
  i5862.m_Interactable = !!i5863[6]
  request.r(i5863[7], i5863[8], 0, i5862, 'm_TargetGraphic')
  return i5862
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5864 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5865 = data
  i5864.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5865[0], i5864.m_PersistentCalls)
  return i5864
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5866 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5867 = data
  var i5869 = i5867[0]
  var i5868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.add(request.d('UnityEngine.Events.PersistentCall', i5869[i + 0]));
  }
  i5866.m_Calls = i5868
  return i5866
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5872 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5873 = data
  request.r(i5873[0], i5873[1], 0, i5872, 'm_Target')
  i5872.m_TargetAssemblyTypeName = i5873[2]
  i5872.m_MethodName = i5873[3]
  i5872.m_Mode = i5873[4]
  i5872.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5873[5], i5872.m_Arguments)
  i5872.m_CallState = i5873[6]
  return i5872
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5874 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5875 = data
  i5874.m_Mode = i5875[0]
  i5874.m_WrapAround = !!i5875[1]
  request.r(i5875[2], i5875[3], 0, i5874, 'm_SelectOnUp')
  request.r(i5875[4], i5875[5], 0, i5874, 'm_SelectOnDown')
  request.r(i5875[6], i5875[7], 0, i5874, 'm_SelectOnLeft')
  request.r(i5875[8], i5875[9], 0, i5874, 'm_SelectOnRight')
  return i5874
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5876 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5877 = data
  i5876.m_NormalColor = new pc.Color(i5877[0], i5877[1], i5877[2], i5877[3])
  i5876.m_HighlightedColor = new pc.Color(i5877[4], i5877[5], i5877[6], i5877[7])
  i5876.m_PressedColor = new pc.Color(i5877[8], i5877[9], i5877[10], i5877[11])
  i5876.m_SelectedColor = new pc.Color(i5877[12], i5877[13], i5877[14], i5877[15])
  i5876.m_DisabledColor = new pc.Color(i5877[16], i5877[17], i5877[18], i5877[19])
  i5876.m_ColorMultiplier = i5877[20]
  i5876.m_FadeDuration = i5877[21]
  return i5876
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5878 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5879 = data
  request.r(i5879[0], i5879[1], 0, i5878, 'm_HighlightedSprite')
  request.r(i5879[2], i5879[3], 0, i5878, 'm_PressedSprite')
  request.r(i5879[4], i5879[5], 0, i5878, 'm_SelectedSprite')
  request.r(i5879[6], i5879[7], 0, i5878, 'm_DisabledSprite')
  return i5878
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5880 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5881 = data
  i5880.m_NormalTrigger = i5881[0]
  i5880.m_HighlightedTrigger = i5881[1]
  i5880.m_PressedTrigger = i5881[2]
  i5880.m_SelectedTrigger = i5881[3]
  i5880.m_DisabledTrigger = i5881[4]
  return i5880
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5882 = root || request.c( 'UnityEngine.UI.Text' )
  var i5883 = data
  i5882.m_FontData = request.d('UnityEngine.UI.FontData', i5883[0], i5882.m_FontData)
  i5882.m_Text = i5883[1]
  request.r(i5883[2], i5883[3], 0, i5882, 'm_Material')
  i5882.m_Maskable = !!i5883[4]
  i5882.m_Color = new pc.Color(i5883[5], i5883[6], i5883[7], i5883[8])
  i5882.m_RaycastTarget = !!i5883[9]
  i5882.m_RaycastPadding = new pc.Vec4( i5883[10], i5883[11], i5883[12], i5883[13] )
  return i5882
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5884 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5885 = data
  request.r(i5885[0], i5885[1], 0, i5884, 'm_Font')
  i5884.m_FontSize = i5885[2]
  i5884.m_FontStyle = i5885[3]
  i5884.m_BestFit = !!i5885[4]
  i5884.m_MinSize = i5885[5]
  i5884.m_MaxSize = i5885[6]
  i5884.m_Alignment = i5885[7]
  i5884.m_AlignByGeometry = !!i5885[8]
  i5884.m_RichText = !!i5885[9]
  i5884.m_HorizontalOverflow = i5885[10]
  i5884.m_VerticalOverflow = i5885[11]
  i5884.m_LineSpacing = i5885[12]
  return i5884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5887 = data
  i5886.type = i5887[0]
  i5886.color = new pc.Color(i5887[1], i5887[2], i5887[3], i5887[4])
  i5886.cullingMask = i5887[5]
  i5886.intensity = i5887[6]
  i5886.range = i5887[7]
  i5886.spotAngle = i5887[8]
  i5886.shadows = i5887[9]
  i5886.shadowNormalBias = i5887[10]
  i5886.shadowBias = i5887[11]
  i5886.shadowStrength = i5887[12]
  i5886.shadowResolution = i5887[13]
  i5886.lightmapBakeType = i5887[14]
  i5886.renderMode = i5887[15]
  request.r(i5887[16], i5887[17], 0, i5886, 'cookie')
  i5886.cookieSize = i5887[18]
  i5886.shadowNearPlane = i5887[19]
  i5886.occlusionMaskChannel = i5887[20]
  i5886.isBaked = !!i5887[21]
  i5886.mixedLightingMode = i5887[22]
  i5886.enabled = !!i5887[23]
  return i5886
}

Deserializers["Project.HexManager"] = function (request, data, root) {
  var i5888 = root || request.c( 'Project.HexManager' )
  var i5889 = data
  request.r(i5889[0], i5889[1], 0, i5888, '_gameManager')
  i5888._positionStep = i5889[2]
  i5888._positionOffset = i5889[3]
  i5888._singleTileTransitionDuration = i5889[4]
  i5888._singleTileTransitionSuspend = i5889[5]
  i5888._tileStackTransitionDelay = i5889[6]
  i5888._timeMultiplierEveryStack = i5889[7]
  i5888._tileJumpHeight = i5889[8]
  i5888._collapseDuration = i5889[9]
  i5888._collapseDelay = i5889[10]
  i5888._delayAfterCollapse = i5889[11]
  var i5891 = i5889[12]
  var i5890 = []
  for(var i = 0; i < i5891.length; i += 4) {
    i5890.push( new pc.Color(i5891[i + 0], i5891[i + 1], i5891[i + 2], i5891[i + 3]) );
  }
  i5888._particlesColors = i5890
  request.r(i5889[13], i5889[14], 0, i5888, '_cameraTransform')
  i5888._cameraShakeDuration = i5889[15]
  i5888._cameraShakePower = i5889[16]
  i5888._cameraShakeVibrato = i5889[17]
  return i5888
}

Deserializers["Project.Hex"] = function (request, data, root) {
  var i5894 = root || request.c( 'Project.Hex' )
  var i5895 = data
  var i5897 = i5895[0]
  var i5896 = new (System.Collections.Generic.List$1(Bridge.ns('Project.Hex')))
  for(var i = 0; i < i5897.length; i += 2) {
  request.r(i5897[i + 0], i5897[i + 1], 1, i5896, '')
  }
  i5894.Neighbours = i5896
  var i5899 = i5895[1]
  var i5898 = new (System.Collections.Generic.List$1(Bridge.ns('Project.HexTile')))
  for(var i = 0; i < i5899.length; i += 2) {
  request.r(i5899[i + 0], i5899[i + 1], 1, i5898, '')
  }
  i5894.Tiles = i5898
  request.r(i5895[2], i5895[3], 0, i5894, 'DisappearParticles')
  return i5894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5903 = data
  i5902.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5903[0], i5902.main)
  i5902.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5903[1], i5902.colorBySpeed)
  i5902.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5903[2], i5902.colorOverLifetime)
  i5902.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5903[3], i5902.emission)
  i5902.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5903[4], i5902.rotationBySpeed)
  i5902.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5903[5], i5902.rotationOverLifetime)
  i5902.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5903[6], i5902.shape)
  i5902.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5903[7], i5902.sizeBySpeed)
  i5902.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5903[8], i5902.sizeOverLifetime)
  i5902.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5903[9], i5902.textureSheetAnimation)
  i5902.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5903[10], i5902.velocityOverLifetime)
  i5902.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5903[11], i5902.noise)
  i5902.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5903[12], i5902.inheritVelocity)
  i5902.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5903[13], i5902.forceOverLifetime)
  i5902.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5903[14], i5902.limitVelocityOverLifetime)
  i5902.useAutoRandomSeed = !!i5903[15]
  i5902.randomSeed = i5903[16]
  return i5902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5904 = root || new pc.ParticleSystemMain()
  var i5905 = data
  i5904.duration = i5905[0]
  i5904.loop = !!i5905[1]
  i5904.prewarm = !!i5905[2]
  i5904.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[3], i5904.startDelay)
  i5904.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[4], i5904.startLifetime)
  i5904.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[5], i5904.startSpeed)
  i5904.startSize3D = !!i5905[6]
  i5904.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[7], i5904.startSizeX)
  i5904.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[8], i5904.startSizeY)
  i5904.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[9], i5904.startSizeZ)
  i5904.startRotation3D = !!i5905[10]
  i5904.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[11], i5904.startRotationX)
  i5904.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[12], i5904.startRotationY)
  i5904.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[13], i5904.startRotationZ)
  i5904.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5905[14], i5904.startColor)
  i5904.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5905[15], i5904.gravityModifier)
  i5904.simulationSpace = i5905[16]
  request.r(i5905[17], i5905[18], 0, i5904, 'customSimulationSpace')
  i5904.simulationSpeed = i5905[19]
  i5904.useUnscaledTime = !!i5905[20]
  i5904.scalingMode = i5905[21]
  i5904.playOnAwake = !!i5905[22]
  i5904.maxParticles = i5905[23]
  i5904.emitterVelocityMode = i5905[24]
  i5904.stopAction = i5905[25]
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5906 = root || new pc.MinMaxCurve()
  var i5907 = data
  i5906.mode = i5907[0]
  i5906.curveMin = new pc.AnimationCurve( { keys_flow: i5907[1] } )
  i5906.curveMax = new pc.AnimationCurve( { keys_flow: i5907[2] } )
  i5906.curveMultiplier = i5907[3]
  i5906.constantMin = i5907[4]
  i5906.constantMax = i5907[5]
  return i5906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5908 = root || new pc.MinMaxGradient()
  var i5909 = data
  i5908.mode = i5909[0]
  i5908.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5909[1], i5908.gradientMin)
  i5908.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5909[2], i5908.gradientMax)
  i5908.colorMin = new pc.Color(i5909[3], i5909[4], i5909[5], i5909[6])
  i5908.colorMax = new pc.Color(i5909[7], i5909[8], i5909[9], i5909[10])
  return i5908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5911 = data
  i5910.mode = i5911[0]
  var i5913 = i5911[1]
  var i5912 = []
  for(var i = 0; i < i5913.length; i += 1) {
    i5912.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5913[i + 0]) );
  }
  i5910.colorKeys = i5912
  var i5915 = i5911[2]
  var i5914 = []
  for(var i = 0; i < i5915.length; i += 1) {
    i5914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5915[i + 0]) );
  }
  i5910.alphaKeys = i5914
  return i5910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5916 = root || new pc.ParticleSystemColorBySpeed()
  var i5917 = data
  i5916.enabled = !!i5917[0]
  i5916.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5917[1], i5916.color)
  i5916.range = new pc.Vec2( i5917[2], i5917[3] )
  return i5916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5921 = data
  i5920.color = new pc.Color(i5921[0], i5921[1], i5921[2], i5921[3])
  i5920.time = i5921[4]
  return i5920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5925 = data
  i5924.alpha = i5925[0]
  i5924.time = i5925[1]
  return i5924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5926 = root || new pc.ParticleSystemColorOverLifetime()
  var i5927 = data
  i5926.enabled = !!i5927[0]
  i5926.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5927[1], i5926.color)
  return i5926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5928 = root || new pc.ParticleSystemEmitter()
  var i5929 = data
  i5928.enabled = !!i5929[0]
  i5928.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[1], i5928.rateOverTime)
  i5928.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5929[2], i5928.rateOverDistance)
  var i5931 = i5929[3]
  var i5930 = []
  for(var i = 0; i < i5931.length; i += 1) {
    i5930.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5931[i + 0]) );
  }
  i5928.bursts = i5930
  return i5928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5934 = root || new pc.ParticleSystemBurst()
  var i5935 = data
  i5934.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5935[0], i5934.count)
  i5934.cycleCount = i5935[1]
  i5934.minCount = i5935[2]
  i5934.maxCount = i5935[3]
  i5934.repeatInterval = i5935[4]
  i5934.time = i5935[5]
  return i5934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5936 = root || new pc.ParticleSystemRotationBySpeed()
  var i5937 = data
  i5936.enabled = !!i5937[0]
  i5936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5937[1], i5936.x)
  i5936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5937[2], i5936.y)
  i5936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5937[3], i5936.z)
  i5936.separateAxes = !!i5937[4]
  i5936.range = new pc.Vec2( i5937[5], i5937[6] )
  return i5936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5938 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5939 = data
  i5938.enabled = !!i5939[0]
  i5938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5939[1], i5938.x)
  i5938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5939[2], i5938.y)
  i5938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5939[3], i5938.z)
  i5938.separateAxes = !!i5939[4]
  return i5938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5940 = root || new pc.ParticleSystemShape()
  var i5941 = data
  i5940.enabled = !!i5941[0]
  i5940.shapeType = i5941[1]
  i5940.randomDirectionAmount = i5941[2]
  i5940.sphericalDirectionAmount = i5941[3]
  i5940.randomPositionAmount = i5941[4]
  i5940.alignToDirection = !!i5941[5]
  i5940.radius = i5941[6]
  i5940.radiusMode = i5941[7]
  i5940.radiusSpread = i5941[8]
  i5940.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5941[9], i5940.radiusSpeed)
  i5940.radiusThickness = i5941[10]
  i5940.angle = i5941[11]
  i5940.length = i5941[12]
  i5940.boxThickness = new pc.Vec3( i5941[13], i5941[14], i5941[15] )
  i5940.meshShapeType = i5941[16]
  request.r(i5941[17], i5941[18], 0, i5940, 'mesh')
  request.r(i5941[19], i5941[20], 0, i5940, 'meshRenderer')
  request.r(i5941[21], i5941[22], 0, i5940, 'skinnedMeshRenderer')
  i5940.useMeshMaterialIndex = !!i5941[23]
  i5940.meshMaterialIndex = i5941[24]
  i5940.useMeshColors = !!i5941[25]
  i5940.normalOffset = i5941[26]
  i5940.arc = i5941[27]
  i5940.arcMode = i5941[28]
  i5940.arcSpread = i5941[29]
  i5940.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5941[30], i5940.arcSpeed)
  i5940.donutRadius = i5941[31]
  i5940.position = new pc.Vec3( i5941[32], i5941[33], i5941[34] )
  i5940.rotation = new pc.Vec3( i5941[35], i5941[36], i5941[37] )
  i5940.scale = new pc.Vec3( i5941[38], i5941[39], i5941[40] )
  return i5940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5942 = root || new pc.ParticleSystemSizeBySpeed()
  var i5943 = data
  i5942.enabled = !!i5943[0]
  i5942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5943[1], i5942.x)
  i5942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5943[2], i5942.y)
  i5942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5943[3], i5942.z)
  i5942.separateAxes = !!i5943[4]
  i5942.range = new pc.Vec2( i5943[5], i5943[6] )
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5944 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5945 = data
  i5944.enabled = !!i5945[0]
  i5944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5945[1], i5944.x)
  i5944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5945[2], i5944.y)
  i5944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5945[3], i5944.z)
  i5944.separateAxes = !!i5945[4]
  return i5944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5946 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5947 = data
  i5946.enabled = !!i5947[0]
  i5946.mode = i5947[1]
  i5946.animation = i5947[2]
  i5946.numTilesX = i5947[3]
  i5946.numTilesY = i5947[4]
  i5946.useRandomRow = !!i5947[5]
  i5946.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5947[6], i5946.frameOverTime)
  i5946.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5947[7], i5946.startFrame)
  i5946.cycleCount = i5947[8]
  i5946.rowIndex = i5947[9]
  i5946.flipU = i5947[10]
  i5946.flipV = i5947[11]
  i5946.spriteCount = i5947[12]
  var i5949 = i5947[13]
  var i5948 = []
  for(var i = 0; i < i5949.length; i += 2) {
  request.r(i5949[i + 0], i5949[i + 1], 2, i5948, '')
  }
  i5946.sprites = i5948
  return i5946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5952 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5953 = data
  i5952.enabled = !!i5953[0]
  i5952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[1], i5952.x)
  i5952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[2], i5952.y)
  i5952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[3], i5952.z)
  i5952.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[4], i5952.radial)
  i5952.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[5], i5952.speedModifier)
  i5952.space = i5953[6]
  i5952.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[7], i5952.orbitalX)
  i5952.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[8], i5952.orbitalY)
  i5952.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[9], i5952.orbitalZ)
  i5952.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[10], i5952.orbitalOffsetX)
  i5952.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[11], i5952.orbitalOffsetY)
  i5952.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5953[12], i5952.orbitalOffsetZ)
  return i5952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5954 = root || new pc.ParticleSystemNoise()
  var i5955 = data
  i5954.enabled = !!i5955[0]
  i5954.separateAxes = !!i5955[1]
  i5954.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[2], i5954.strengthX)
  i5954.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[3], i5954.strengthY)
  i5954.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[4], i5954.strengthZ)
  i5954.frequency = i5955[5]
  i5954.damping = !!i5955[6]
  i5954.octaveCount = i5955[7]
  i5954.octaveMultiplier = i5955[8]
  i5954.octaveScale = i5955[9]
  i5954.quality = i5955[10]
  i5954.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[11], i5954.scrollSpeed)
  i5954.scrollSpeedMultiplier = i5955[12]
  i5954.remapEnabled = !!i5955[13]
  i5954.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[14], i5954.remapX)
  i5954.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[15], i5954.remapY)
  i5954.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[16], i5954.remapZ)
  i5954.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[17], i5954.positionAmount)
  i5954.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[18], i5954.rotationAmount)
  i5954.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5955[19], i5954.sizeAmount)
  return i5954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5956 = root || new pc.ParticleSystemInheritVelocity()
  var i5957 = data
  i5956.enabled = !!i5957[0]
  i5956.mode = i5957[1]
  i5956.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5957[2], i5956.curve)
  return i5956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5958 = root || new pc.ParticleSystemForceOverLifetime()
  var i5959 = data
  i5958.enabled = !!i5959[0]
  i5958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5959[1], i5958.x)
  i5958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5959[2], i5958.y)
  i5958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5959[3], i5958.z)
  i5958.space = i5959[4]
  i5958.randomized = !!i5959[5]
  return i5958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5960 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5961 = data
  i5960.enabled = !!i5961[0]
  i5960.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5961[1], i5960.limit)
  i5960.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5961[2], i5960.limitX)
  i5960.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5961[3], i5960.limitY)
  i5960.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5961[4], i5960.limitZ)
  i5960.dampen = i5961[5]
  i5960.separateAxes = !!i5961[6]
  i5960.space = i5961[7]
  i5960.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5961[8], i5960.drag)
  i5960.multiplyDragByParticleSize = !!i5961[9]
  i5960.multiplyDragByParticleVelocity = !!i5961[10]
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5963 = data
  request.r(i5963[0], i5963[1], 0, i5962, 'mesh')
  i5962.meshCount = i5963[2]
  i5962.activeVertexStreamsCount = i5963[3]
  i5962.alignment = i5963[4]
  i5962.renderMode = i5963[5]
  i5962.sortMode = i5963[6]
  i5962.lengthScale = i5963[7]
  i5962.velocityScale = i5963[8]
  i5962.cameraVelocityScale = i5963[9]
  i5962.normalDirection = i5963[10]
  i5962.sortingFudge = i5963[11]
  i5962.minParticleSize = i5963[12]
  i5962.maxParticleSize = i5963[13]
  i5962.pivot = new pc.Vec3( i5963[14], i5963[15], i5963[16] )
  request.r(i5963[17], i5963[18], 0, i5962, 'trailMaterial')
  i5962.applyActiveColorSpace = !!i5963[19]
  i5962.enabled = !!i5963[20]
  request.r(i5963[21], i5963[22], 0, i5962, 'sharedMaterial')
  var i5965 = i5963[23]
  var i5964 = []
  for(var i = 0; i < i5965.length; i += 2) {
  request.r(i5965[i + 0], i5965[i + 1], 2, i5964, '')
  }
  i5962.sharedMaterials = i5964
  i5962.receiveShadows = !!i5963[24]
  i5962.shadowCastingMode = i5963[25]
  i5962.sortingLayerID = i5963[26]
  i5962.sortingOrder = i5963[27]
  i5962.lightmapIndex = i5963[28]
  i5962.lightmapSceneIndex = i5963[29]
  i5962.lightmapScaleOffset = new pc.Vec4( i5963[30], i5963[31], i5963[32], i5963[33] )
  i5962.lightProbeUsage = i5963[34]
  i5962.reflectionProbeUsage = i5963[35]
  return i5962
}

Deserializers["Project.HexDropTarget"] = function (request, data, root) {
  var i5966 = root || request.c( 'Project.HexDropTarget' )
  var i5967 = data
  request.r(i5967[0], i5967[1], 0, i5966, '_hexManager')
  request.r(i5967[2], i5967[3], 0, i5966, '_placeOnHex')
  i5966._moveDuration = i5967[4]
  i5966._fallDuration = i5967[5]
  i5966._hexActivateDelay = i5967[6]
  return i5966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5969 = data
  i5968.center = new pc.Vec3( i5969[0], i5969[1], i5969[2] )
  i5968.radius = i5969[3]
  i5968.enabled = !!i5969[4]
  i5968.isTrigger = !!i5969[5]
  request.r(i5969[6], i5969[7], 0, i5968, 'material')
  return i5968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5971 = data
  request.r(i5971[0], i5971[1], 0, i5970, 'sharedMesh')
  i5970.convex = !!i5971[2]
  i5970.enabled = !!i5971[3]
  i5970.isTrigger = !!i5971[4]
  request.r(i5971[5], i5971[6], 0, i5970, 'material')
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5973 = data
  i5972.ambientIntensity = i5973[0]
  i5972.reflectionIntensity = i5973[1]
  i5972.ambientMode = i5973[2]
  i5972.ambientLight = new pc.Color(i5973[3], i5973[4], i5973[5], i5973[6])
  i5972.ambientSkyColor = new pc.Color(i5973[7], i5973[8], i5973[9], i5973[10])
  i5972.ambientGroundColor = new pc.Color(i5973[11], i5973[12], i5973[13], i5973[14])
  i5972.ambientEquatorColor = new pc.Color(i5973[15], i5973[16], i5973[17], i5973[18])
  i5972.fogColor = new pc.Color(i5973[19], i5973[20], i5973[21], i5973[22])
  i5972.fogEndDistance = i5973[23]
  i5972.fogStartDistance = i5973[24]
  i5972.fogDensity = i5973[25]
  i5972.fog = !!i5973[26]
  request.r(i5973[27], i5973[28], 0, i5972, 'skybox')
  i5972.fogMode = i5973[29]
  var i5975 = i5973[30]
  var i5974 = []
  for(var i = 0; i < i5975.length; i += 1) {
    i5974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5975[i + 0]) );
  }
  i5972.lightmaps = i5974
  i5972.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5973[31], i5972.lightProbes)
  i5972.lightmapsMode = i5973[32]
  i5972.mixedBakeMode = i5973[33]
  i5972.environmentLightingMode = i5973[34]
  i5972.ambientProbe = new pc.SphericalHarmonicsL2(i5973[35])
  request.r(i5973[36], i5973[37], 0, i5972, 'customReflection')
  request.r(i5973[38], i5973[39], 0, i5972, 'defaultReflection')
  i5972.defaultReflectionMode = i5973[40]
  i5972.defaultReflectionResolution = i5973[41]
  i5972.sunLightObjectId = i5973[42]
  i5972.pixelLightCount = i5973[43]
  i5972.defaultReflectionHDR = !!i5973[44]
  i5972.hasLightDataAsset = !!i5973[45]
  i5972.hasManualGenerate = !!i5973[46]
  return i5972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5979 = data
  request.r(i5979[0], i5979[1], 0, i5978, 'lightmapColor')
  request.r(i5979[2], i5979[3], 0, i5978, 'lightmapDirection')
  request.r(i5979[4], i5979[5], 0, i5978, 'shadowMask')
  return i5978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5980 = root || new UnityEngine.LightProbes()
  var i5981 = data
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5989 = data
  var i5991 = i5989[0]
  var i5990 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5991.length; i += 1) {
    i5990.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5991[i + 0]));
  }
  i5988.ShaderCompilationErrors = i5990
  i5988.name = i5989[1]
  i5988.guid = i5989[2]
  var i5993 = i5989[3]
  var i5992 = []
  for(var i = 0; i < i5993.length; i += 1) {
    i5992.push( i5993[i + 0] );
  }
  i5988.shaderDefinedKeywords = i5992
  var i5995 = i5989[4]
  var i5994 = []
  for(var i = 0; i < i5995.length; i += 1) {
    i5994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5995[i + 0]) );
  }
  i5988.passes = i5994
  var i5997 = i5989[5]
  var i5996 = []
  for(var i = 0; i < i5997.length; i += 1) {
    i5996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5997[i + 0]) );
  }
  i5988.usePasses = i5996
  var i5999 = i5989[6]
  var i5998 = []
  for(var i = 0; i < i5999.length; i += 1) {
    i5998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5999[i + 0]) );
  }
  i5988.defaultParameterValues = i5998
  request.r(i5989[7], i5989[8], 0, i5988, 'unityFallbackShader')
  i5988.readDepth = !!i5989[9]
  i5988.hasDepthOnlyPass = !!i5989[10]
  i5988.isCreatedByShaderGraph = !!i5989[11]
  i5988.disableBatching = !!i5989[12]
  i5988.compiled = !!i5989[13]
  return i5988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6003 = data
  i6002.shaderName = i6003[0]
  i6002.errorMessage = i6003[1]
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6008 = root || new pc.UnityShaderPass()
  var i6009 = data
  i6008.id = i6009[0]
  i6008.subShaderIndex = i6009[1]
  i6008.name = i6009[2]
  i6008.passType = i6009[3]
  i6008.grabPassTextureName = i6009[4]
  i6008.usePass = !!i6009[5]
  i6008.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[6], i6008.zTest)
  i6008.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[7], i6008.zWrite)
  i6008.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[8], i6008.culling)
  i6008.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6009[9], i6008.blending)
  i6008.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6009[10], i6008.alphaBlending)
  i6008.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[11], i6008.colorWriteMask)
  i6008.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[12], i6008.offsetUnits)
  i6008.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[13], i6008.offsetFactor)
  i6008.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[14], i6008.stencilRef)
  i6008.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[15], i6008.stencilReadMask)
  i6008.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6009[16], i6008.stencilWriteMask)
  i6008.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6009[17], i6008.stencilOp)
  i6008.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6009[18], i6008.stencilOpFront)
  i6008.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6009[19], i6008.stencilOpBack)
  var i6011 = i6009[20]
  var i6010 = []
  for(var i = 0; i < i6011.length; i += 1) {
    i6010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6011[i + 0]) );
  }
  i6008.tags = i6010
  var i6013 = i6009[21]
  var i6012 = []
  for(var i = 0; i < i6013.length; i += 1) {
    i6012.push( i6013[i + 0] );
  }
  i6008.passDefinedKeywords = i6012
  var i6015 = i6009[22]
  var i6014 = []
  for(var i = 0; i < i6015.length; i += 1) {
    i6014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6015[i + 0]) );
  }
  i6008.passDefinedKeywordGroups = i6014
  var i6017 = i6009[23]
  var i6016 = []
  for(var i = 0; i < i6017.length; i += 1) {
    i6016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6017[i + 0]) );
  }
  i6008.variants = i6016
  var i6019 = i6009[24]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6019[i + 0]) );
  }
  i6008.excludedVariants = i6018
  i6008.hasDepthReader = !!i6009[25]
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6021 = data
  i6020.val = i6021[0]
  i6020.name = i6021[1]
  return i6020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6023 = data
  i6022.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6023[0], i6022.src)
  i6022.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6023[1], i6022.dst)
  i6022.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6023[2], i6022.op)
  return i6022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6025 = data
  i6024.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6025[0], i6024.pass)
  i6024.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6025[1], i6024.fail)
  i6024.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6025[2], i6024.zFail)
  i6024.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6025[3], i6024.comp)
  return i6024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6029 = data
  i6028.name = i6029[0]
  i6028.value = i6029[1]
  return i6028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6033 = data
  var i6035 = i6033[0]
  var i6034 = []
  for(var i = 0; i < i6035.length; i += 1) {
    i6034.push( i6035[i + 0] );
  }
  i6032.keywords = i6034
  i6032.hasDiscard = !!i6033[1]
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6039 = data
  i6038.passId = i6039[0]
  i6038.subShaderIndex = i6039[1]
  var i6041 = i6039[2]
  var i6040 = []
  for(var i = 0; i < i6041.length; i += 1) {
    i6040.push( i6041[i + 0] );
  }
  i6038.keywords = i6040
  i6038.vertexProgram = i6039[3]
  i6038.fragmentProgram = i6039[4]
  i6038.exportedForWebGl2 = !!i6039[5]
  i6038.readDepth = !!i6039[6]
  return i6038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6045 = data
  request.r(i6045[0], i6045[1], 0, i6044, 'shader')
  i6044.pass = i6045[2]
  return i6044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6049 = data
  i6048.name = i6049[0]
  i6048.type = i6049[1]
  i6048.value = new pc.Vec4( i6049[2], i6049[3], i6049[4], i6049[5] )
  i6048.textureValue = i6049[6]
  i6048.shaderPropertyFlag = i6049[7]
  return i6048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6051 = data
  i6050.name = i6051[0]
  request.r(i6051[1], i6051[2], 0, i6050, 'texture')
  i6050.aabb = i6051[3]
  i6050.vertices = i6051[4]
  i6050.triangles = i6051[5]
  i6050.textureRect = UnityEngine.Rect.MinMaxRect(i6051[6], i6051[7], i6051[8], i6051[9])
  i6050.packedRect = UnityEngine.Rect.MinMaxRect(i6051[10], i6051[11], i6051[12], i6051[13])
  i6050.border = new pc.Vec4( i6051[14], i6051[15], i6051[16], i6051[17] )
  i6050.transparency = i6051[18]
  i6050.bounds = i6051[19]
  i6050.pixelsPerUnit = i6051[20]
  i6050.textureWidth = i6051[21]
  i6050.textureHeight = i6051[22]
  i6050.nativeSize = new pc.Vec2( i6051[23], i6051[24] )
  i6050.pivot = new pc.Vec2( i6051[25], i6051[26] )
  i6050.textureRectOffset = new pc.Vec2( i6051[27], i6051[28] )
  return i6050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6053 = data
  i6052.name = i6053[0]
  i6052.wrapMode = i6053[1]
  i6052.isLooping = !!i6053[2]
  i6052.length = i6053[3]
  var i6055 = i6053[4]
  var i6054 = []
  for(var i = 0; i < i6055.length; i += 1) {
    i6054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6055[i + 0]) );
  }
  i6052.curves = i6054
  var i6057 = i6053[5]
  var i6056 = []
  for(var i = 0; i < i6057.length; i += 1) {
    i6056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6057[i + 0]) );
  }
  i6052.events = i6056
  i6052.halfPrecision = !!i6053[6]
  i6052._frameRate = i6053[7]
  i6052.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6053[8], i6052.localBounds)
  i6052.hasMuscleCurves = !!i6053[9]
  var i6059 = i6053[10]
  var i6058 = []
  for(var i = 0; i < i6059.length; i += 1) {
    i6058.push( i6059[i + 0] );
  }
  i6052.clipMuscleConstant = i6058
  i6052.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6053[11], i6052.clipBindingConstant)
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6063 = data
  i6062.path = i6063[0]
  i6062.hash = i6063[1]
  i6062.componentType = i6063[2]
  i6062.property = i6063[3]
  i6062.keys = i6063[4]
  var i6065 = i6063[5]
  var i6064 = []
  for(var i = 0; i < i6065.length; i += 1) {
    i6064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6065[i + 0]) );
  }
  i6062.objectReferenceKeys = i6064
  return i6062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6069 = data
  i6068.time = i6069[0]
  request.r(i6069[1], i6069[2], 0, i6068, 'value')
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6073 = data
  i6072.functionName = i6073[0]
  i6072.floatParameter = i6073[1]
  i6072.intParameter = i6073[2]
  i6072.stringParameter = i6073[3]
  request.r(i6073[4], i6073[5], 0, i6072, 'objectReferenceParameter')
  i6072.time = i6073[6]
  return i6072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6075 = data
  i6074.center = new pc.Vec3( i6075[0], i6075[1], i6075[2] )
  i6074.extends = new pc.Vec3( i6075[3], i6075[4], i6075[5] )
  return i6074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6079 = data
  var i6081 = i6079[0]
  var i6080 = []
  for(var i = 0; i < i6081.length; i += 1) {
    i6080.push( i6081[i + 0] );
  }
  i6078.genericBindings = i6080
  var i6083 = i6079[1]
  var i6082 = []
  for(var i = 0; i < i6083.length; i += 1) {
    i6082.push( i6083[i + 0] );
  }
  i6078.pptrCurveMapping = i6082
  return i6078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6085 = data
  i6084.name = i6085[0]
  i6084.ascent = i6085[1]
  i6084.originalLineHeight = i6085[2]
  i6084.fontSize = i6085[3]
  var i6087 = i6085[4]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 1) {
    i6086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6087[i + 0]) );
  }
  i6084.characterInfo = i6086
  request.r(i6085[5], i6085[6], 0, i6084, 'texture')
  i6084.originalFontSize = i6085[7]
  return i6084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6091 = data
  i6090.index = i6091[0]
  i6090.advance = i6091[1]
  i6090.bearing = i6091[2]
  i6090.glyphWidth = i6091[3]
  i6090.glyphHeight = i6091[4]
  i6090.minX = i6091[5]
  i6090.maxX = i6091[6]
  i6090.minY = i6091[7]
  i6090.maxY = i6091[8]
  i6090.uvBottomLeftX = i6091[9]
  i6090.uvBottomLeftY = i6091[10]
  i6090.uvBottomRightX = i6091[11]
  i6090.uvBottomRightY = i6091[12]
  i6090.uvTopLeftX = i6091[13]
  i6090.uvTopLeftY = i6091[14]
  i6090.uvTopRightX = i6091[15]
  i6090.uvTopRightY = i6091[16]
  return i6090
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6092 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6093 = data
  i6092.useSafeMode = !!i6093[0]
  i6092.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6093[1], i6092.safeModeOptions)
  i6092.timeScale = i6093[2]
  i6092.unscaledTimeScale = i6093[3]
  i6092.useSmoothDeltaTime = !!i6093[4]
  i6092.maxSmoothUnscaledTime = i6093[5]
  i6092.rewindCallbackMode = i6093[6]
  i6092.showUnityEditorReport = !!i6093[7]
  i6092.logBehaviour = i6093[8]
  i6092.drawGizmos = !!i6093[9]
  i6092.defaultRecyclable = !!i6093[10]
  i6092.defaultAutoPlay = i6093[11]
  i6092.defaultUpdateType = i6093[12]
  i6092.defaultTimeScaleIndependent = !!i6093[13]
  i6092.defaultEaseType = i6093[14]
  i6092.defaultEaseOvershootOrAmplitude = i6093[15]
  i6092.defaultEasePeriod = i6093[16]
  i6092.defaultAutoKill = !!i6093[17]
  i6092.defaultLoopType = i6093[18]
  i6092.debugMode = !!i6093[19]
  i6092.debugStoreTargetId = !!i6093[20]
  i6092.showPreviewPanel = !!i6093[21]
  i6092.storeSettingsLocation = i6093[22]
  i6092.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6093[23], i6092.modules)
  i6092.createASMDEF = !!i6093[24]
  i6092.showPlayingTweens = !!i6093[25]
  i6092.showPausedTweens = !!i6093[26]
  return i6092
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6094 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6095 = data
  i6094.logBehaviour = i6095[0]
  i6094.nestedTweenFailureBehaviour = i6095[1]
  return i6094
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6096 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6097 = data
  i6096.showPanel = !!i6097[0]
  i6096.audioEnabled = !!i6097[1]
  i6096.physicsEnabled = !!i6097[2]
  i6096.physics2DEnabled = !!i6097[3]
  i6096.spriteEnabled = !!i6097[4]
  i6096.uiEnabled = !!i6097[5]
  i6096.textMeshProEnabled = !!i6097[6]
  i6096.tk2DEnabled = !!i6097[7]
  i6096.deAudioEnabled = !!i6097[8]
  i6096.deUnityExtendedEnabled = !!i6097[9]
  i6096.epoOutlineEnabled = !!i6097[10]
  return i6096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6099 = data
  var i6101 = i6099[0]
  var i6100 = []
  for(var i = 0; i < i6101.length; i += 1) {
    i6100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6101[i + 0]) );
  }
  i6098.files = i6100
  i6098.componentToPrefabIds = i6099[1]
  return i6098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6105 = data
  i6104.path = i6105[0]
  request.r(i6105[1], i6105[2], 0, i6104, 'unityObject')
  return i6104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6107 = data
  var i6109 = i6107[0]
  var i6108 = []
  for(var i = 0; i < i6109.length; i += 1) {
    i6108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6109[i + 0]) );
  }
  i6106.scriptsExecutionOrder = i6108
  var i6111 = i6107[1]
  var i6110 = []
  for(var i = 0; i < i6111.length; i += 1) {
    i6110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6111[i + 0]) );
  }
  i6106.sortingLayers = i6110
  var i6113 = i6107[2]
  var i6112 = []
  for(var i = 0; i < i6113.length; i += 1) {
    i6112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6113[i + 0]) );
  }
  i6106.cullingLayers = i6112
  i6106.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6107[3], i6106.timeSettings)
  i6106.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6107[4], i6106.physicsSettings)
  i6106.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6107[5], i6106.physics2DSettings)
  i6106.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6107[6], i6106.qualitySettings)
  i6106.enableRealtimeShadows = !!i6107[7]
  i6106.enableAutoInstancing = !!i6107[8]
  i6106.enableStaticBatching = !!i6107[9]
  i6106.enableDynamicBatching = !!i6107[10]
  i6106.usePreservativeDynamicBatching = !!i6107[11]
  i6106.lightmapEncodingQuality = i6107[12]
  i6106.desiredColorSpace = i6107[13]
  var i6115 = i6107[14]
  var i6114 = []
  for(var i = 0; i < i6115.length; i += 1) {
    i6114.push( i6115[i + 0] );
  }
  i6106.allTags = i6114
  return i6106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6119 = data
  i6118.name = i6119[0]
  i6118.value = i6119[1]
  return i6118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6123 = data
  i6122.id = i6123[0]
  i6122.name = i6123[1]
  i6122.value = i6123[2]
  return i6122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6127 = data
  i6126.id = i6127[0]
  i6126.name = i6127[1]
  return i6126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6129 = data
  i6128.fixedDeltaTime = i6129[0]
  i6128.maximumDeltaTime = i6129[1]
  i6128.timeScale = i6129[2]
  i6128.maximumParticleTimestep = i6129[3]
  return i6128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6131 = data
  i6130.gravity = new pc.Vec3( i6131[0], i6131[1], i6131[2] )
  i6130.defaultSolverIterations = i6131[3]
  i6130.bounceThreshold = i6131[4]
  i6130.autoSyncTransforms = !!i6131[5]
  i6130.autoSimulation = !!i6131[6]
  var i6133 = i6131[7]
  var i6132 = []
  for(var i = 0; i < i6133.length; i += 1) {
    i6132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6133[i + 0]) );
  }
  i6130.collisionMatrix = i6132
  return i6130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6137 = data
  i6136.enabled = !!i6137[0]
  i6136.layerId = i6137[1]
  i6136.otherLayerId = i6137[2]
  return i6136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6139 = data
  request.r(i6139[0], i6139[1], 0, i6138, 'material')
  i6138.gravity = new pc.Vec2( i6139[2], i6139[3] )
  i6138.positionIterations = i6139[4]
  i6138.velocityIterations = i6139[5]
  i6138.velocityThreshold = i6139[6]
  i6138.maxLinearCorrection = i6139[7]
  i6138.maxAngularCorrection = i6139[8]
  i6138.maxTranslationSpeed = i6139[9]
  i6138.maxRotationSpeed = i6139[10]
  i6138.baumgarteScale = i6139[11]
  i6138.baumgarteTOIScale = i6139[12]
  i6138.timeToSleep = i6139[13]
  i6138.linearSleepTolerance = i6139[14]
  i6138.angularSleepTolerance = i6139[15]
  i6138.defaultContactOffset = i6139[16]
  i6138.autoSimulation = !!i6139[17]
  i6138.queriesHitTriggers = !!i6139[18]
  i6138.queriesStartInColliders = !!i6139[19]
  i6138.callbacksOnDisable = !!i6139[20]
  i6138.reuseCollisionCallbacks = !!i6139[21]
  i6138.autoSyncTransforms = !!i6139[22]
  var i6141 = i6139[23]
  var i6140 = []
  for(var i = 0; i < i6141.length; i += 1) {
    i6140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6141[i + 0]) );
  }
  i6138.collisionMatrix = i6140
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6145 = data
  i6144.enabled = !!i6145[0]
  i6144.layerId = i6145[1]
  i6144.otherLayerId = i6145[2]
  return i6144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6147 = data
  var i6149 = i6147[0]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 1) {
    i6148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6149[i + 0]) );
  }
  i6146.qualityLevels = i6148
  var i6151 = i6147[1]
  var i6150 = []
  for(var i = 0; i < i6151.length; i += 1) {
    i6150.push( i6151[i + 0] );
  }
  i6146.names = i6150
  i6146.shadows = i6147[2]
  i6146.anisotropicFiltering = i6147[3]
  i6146.antiAliasing = i6147[4]
  i6146.lodBias = i6147[5]
  i6146.shadowCascades = i6147[6]
  i6146.shadowDistance = i6147[7]
  i6146.shadowmaskMode = i6147[8]
  i6146.shadowProjection = i6147[9]
  i6146.shadowResolution = i6147[10]
  i6146.softParticles = !!i6147[11]
  i6146.softVegetation = !!i6147[12]
  i6146.activeColorSpace = i6147[13]
  i6146.desiredColorSpace = i6147[14]
  i6146.masterTextureLimit = i6147[15]
  i6146.maxQueuedFrames = i6147[16]
  i6146.particleRaycastBudget = i6147[17]
  i6146.pixelLightCount = i6147[18]
  i6146.realtimeReflectionProbes = !!i6147[19]
  i6146.shadowCascade2Split = i6147[20]
  i6146.shadowCascade4Split = new pc.Vec3( i6147[21], i6147[22], i6147[23] )
  i6146.streamingMipmapsActive = !!i6147[24]
  i6146.vSyncCount = i6147[25]
  i6146.asyncUploadBufferSize = i6147[26]
  i6146.asyncUploadTimeSlice = i6147[27]
  i6146.billboardsFaceCameraPosition = !!i6147[28]
  i6146.shadowNearPlaneOffset = i6147[29]
  i6146.streamingMipmapsMemoryBudget = i6147[30]
  i6146.maximumLODLevel = i6147[31]
  i6146.streamingMipmapsAddAllCameras = !!i6147[32]
  i6146.streamingMipmapsMaxLevelReduction = i6147[33]
  i6146.streamingMipmapsRenderersPerFrame = i6147[34]
  i6146.resolutionScalingFixedDPIFactor = i6147[35]
  i6146.streamingMipmapsMaxFileIORequests = i6147[36]
  i6146.currentQualityLevel = i6147[37]
  return i6146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6157 = data
  i6156.weight = i6157[0]
  i6156.vertices = i6157[1]
  i6156.normals = i6157[2]
  i6156.tangents = i6157[3]
  return i6156
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6158 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6159 = data
  request.r(i6159[0], i6159[1], 0, i6158, 'm_ObjectArgument')
  i6158.m_ObjectArgumentAssemblyTypeName = i6159[2]
  i6158.m_IntArgument = i6159[3]
  i6158.m_FloatArgument = i6159[4]
  i6158.m_StringArgument = i6159[5]
  i6158.m_BoolArgument = !!i6159[6]
  return i6158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[4],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[4],"75":[9],"76":[77],"78":[77],"20":[19],"79":[19],"80":[19],"28":[20],"26":[25,19],"81":[19],"21":[20],"82":[19],"83":[19],"84":[19],"85":[19],"86":[19],"87":[19],"88":[19],"89":[19],"90":[19],"91":[25,19],"92":[19],"93":[19],"94":[19],"95":[19],"31":[25,19],"96":[19],"97":[15],"98":[15],"16":[15],"99":[15],"100":[4],"14":[4]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Project.DraggableHex","Project.HexTile","UnityEngine.Camera","Project.GameManager","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Project.TutorialManager","Project.Packshot","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.Animation","UnityEngine.GameObject","UnityEngine.AnimationClip","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Light","Project.HexManager","Project.Hex","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Project.HexDropTarget","UnityEngine.SphereCollider","UnityEngine.MeshCollider","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "05/22/2026 13:08:39";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39898";

Deserializers.projectId = "57c3a09d98af8254ea5d1468471e8fb5";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1665";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3633";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.test-3d";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "4616ae10-e514-4b6e-adde-1be62d27a76e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

