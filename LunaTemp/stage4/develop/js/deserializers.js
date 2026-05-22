var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.JointSpring' )
  var i3961 = data
  i3960.spring = i3961[0]
  i3960.damper = i3961[1]
  i3960.targetPosition = i3961[2]
  return i3960
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.JointMotor' )
  var i3963 = data
  i3962.m_TargetVelocity = i3963[0]
  i3962.m_Force = i3963[1]
  i3962.m_FreeSpin = i3963[2]
  return i3962
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.JointLimits' )
  var i3965 = data
  i3964.m_Min = i3965[0]
  i3964.m_Max = i3965[1]
  i3964.m_Bounciness = i3965[2]
  i3964.m_BounceMinVelocity = i3965[3]
  i3964.m_ContactDistance = i3965[4]
  i3964.minBounce = i3965[5]
  i3964.maxBounce = i3965[6]
  return i3964
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3966 = root || request.c( 'UnityEngine.JointDrive' )
  var i3967 = data
  i3966.m_PositionSpring = i3967[0]
  i3966.m_PositionDamper = i3967[1]
  i3966.m_MaximumForce = i3967[2]
  i3966.m_UseAcceleration = i3967[3]
  return i3966
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3969 = data
  i3968.m_Spring = i3969[0]
  i3968.m_Damper = i3969[1]
  return i3968
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3970 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3971 = data
  i3970.m_Limit = i3971[0]
  i3970.m_Bounciness = i3971[1]
  i3970.m_ContactDistance = i3971[2]
  return i3970
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3972 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3973 = data
  i3972.m_ExtremumSlip = i3973[0]
  i3972.m_ExtremumValue = i3973[1]
  i3972.m_AsymptoteSlip = i3973[2]
  i3972.m_AsymptoteValue = i3973[3]
  i3972.m_Stiffness = i3973[4]
  return i3972
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3974 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3975 = data
  i3974.m_LowerAngle = i3975[0]
  i3974.m_UpperAngle = i3975[1]
  return i3974
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3976 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3977 = data
  i3976.m_MotorSpeed = i3977[0]
  i3976.m_MaximumMotorTorque = i3977[1]
  return i3976
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3978 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3979 = data
  i3978.m_DampingRatio = i3979[0]
  i3978.m_Frequency = i3979[1]
  i3978.m_Angle = i3979[2]
  return i3978
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3980 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3981 = data
  i3980.m_LowerTranslation = i3981[0]
  i3980.m_UpperTranslation = i3981[1]
  return i3980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3983 = data
  i3982.name = i3983[0]
  i3982.width = i3983[1]
  i3982.height = i3983[2]
  i3982.mipmapCount = i3983[3]
  i3982.anisoLevel = i3983[4]
  i3982.filterMode = i3983[5]
  i3982.hdr = !!i3983[6]
  i3982.format = i3983[7]
  i3982.wrapMode = i3983[8]
  i3982.alphaIsTransparency = !!i3983[9]
  i3982.alphaSource = i3983[10]
  i3982.graphicsFormat = i3983[11]
  i3982.sRGBTexture = !!i3983[12]
  i3982.desiredColorSpace = i3983[13]
  i3982.wrapU = i3983[14]
  i3982.wrapV = i3983[15]
  return i3982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3985 = data
  i3984.position = new pc.Vec3( i3985[0], i3985[1], i3985[2] )
  i3984.scale = new pc.Vec3( i3985[3], i3985[4], i3985[5] )
  i3984.rotation = new pc.Quat(i3985[6], i3985[7], i3985[8], i3985[9])
  return i3984
}

Deserializers["Project.DraggableHex"] = function (request, data, root) {
  var i3986 = root || request.c( 'Project.DraggableHex' )
  var i3987 = data
  i3986.DragHeight = i3987[0]
  var i3989 = i3987[1]
  var i3988 = new (System.Collections.Generic.List$1(Bridge.ns('Project.HexTile')))
  for(var i = 0; i < i3989.length; i += 2) {
  request.r(i3989[i + 0], i3989[i + 1], 1, i3988, '')
  }
  i3986.Tiles = i3988
  i3986.RaycastLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3987[2] )
  request.r(i3987[3], i3987[4], 0, i3986, 'Camera')
  i3986.DragSmoothSpeed = i3987[5]
  i3986.ReturnDuration = i3987[6]
  request.r(i3987[7], i3987[8], 0, i3986, '_gameManager')
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3993 = data
  i3992.center = new pc.Vec3( i3993[0], i3993[1], i3993[2] )
  i3992.size = new pc.Vec3( i3993[3], i3993[4], i3993[5] )
  i3992.enabled = !!i3993[6]
  i3992.isTrigger = !!i3993[7]
  request.r(i3993[8], i3993[9], 0, i3992, 'material')
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3995 = data
  request.r(i3995[0], i3995[1], 0, i3994, 'sharedMesh')
  return i3994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3997 = data
  request.r(i3997[0], i3997[1], 0, i3996, 'additionalVertexStreams')
  i3996.enabled = !!i3997[2]
  request.r(i3997[3], i3997[4], 0, i3996, 'sharedMaterial')
  var i3999 = i3997[5]
  var i3998 = []
  for(var i = 0; i < i3999.length; i += 2) {
  request.r(i3999[i + 0], i3999[i + 1], 2, i3998, '')
  }
  i3996.sharedMaterials = i3998
  i3996.receiveShadows = !!i3997[6]
  i3996.shadowCastingMode = i3997[7]
  i3996.sortingLayerID = i3997[8]
  i3996.sortingOrder = i3997[9]
  i3996.lightmapIndex = i3997[10]
  i3996.lightmapSceneIndex = i3997[11]
  i3996.lightmapScaleOffset = new pc.Vec4( i3997[12], i3997[13], i3997[14], i3997[15] )
  i3996.lightProbeUsage = i3997[16]
  i3996.reflectionProbeUsage = i3997[17]
  return i3996
}

Deserializers["Project.HexTile"] = function (request, data, root) {
  var i4002 = root || request.c( 'Project.HexTile' )
  var i4003 = data
  i4002.ColorIndex = i4003[0]
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4005 = data
  i4004.name = i4005[0]
  i4004.tagId = i4005[1]
  i4004.enabled = !!i4005[2]
  i4004.isStatic = !!i4005[3]
  i4004.layer = i4005[4]
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4007 = data
  i4006.name = i4007[0]
  i4006.halfPrecision = !!i4007[1]
  i4006.useSimplification = !!i4007[2]
  i4006.useUInt32IndexFormat = !!i4007[3]
  i4006.vertexCount = i4007[4]
  i4006.aabb = i4007[5]
  var i4009 = i4007[6]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( !!i4009[i + 0] );
  }
  i4006.streams = i4008
  i4006.vertices = i4007[7]
  var i4011 = i4007[8]
  var i4010 = []
  for(var i = 0; i < i4011.length; i += 1) {
    i4010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4011[i + 0]) );
  }
  i4006.subMeshes = i4010
  var i4013 = i4007[9]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 16) {
    i4012.push( new pc.Mat4().setData(i4013[i + 0], i4013[i + 1], i4013[i + 2], i4013[i + 3],  i4013[i + 4], i4013[i + 5], i4013[i + 6], i4013[i + 7],  i4013[i + 8], i4013[i + 9], i4013[i + 10], i4013[i + 11],  i4013[i + 12], i4013[i + 13], i4013[i + 14], i4013[i + 15]) );
  }
  i4006.bindposes = i4012
  var i4015 = i4007[10]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 1) {
    i4014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4015[i + 0]) );
  }
  i4006.blendShapes = i4014
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4021 = data
  i4020.triangles = i4021[0]
  return i4020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4027 = data
  i4026.name = i4027[0]
  var i4029 = i4027[1]
  var i4028 = []
  for(var i = 0; i < i4029.length; i += 1) {
    i4028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4029[i + 0]) );
  }
  i4026.frames = i4028
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4030 = root || new pc.UnityMaterial()
  var i4031 = data
  i4030.name = i4031[0]
  request.r(i4031[1], i4031[2], 0, i4030, 'shader')
  i4030.renderQueue = i4031[3]
  i4030.enableInstancing = !!i4031[4]
  var i4033 = i4031[5]
  var i4032 = []
  for(var i = 0; i < i4033.length; i += 1) {
    i4032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4033[i + 0]) );
  }
  i4030.floatParameters = i4032
  var i4035 = i4031[6]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4035[i + 0]) );
  }
  i4030.colorParameters = i4034
  var i4037 = i4031[7]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4037[i + 0]) );
  }
  i4030.vectorParameters = i4036
  var i4039 = i4031[8]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4039[i + 0]) );
  }
  i4030.textureParameters = i4038
  var i4041 = i4031[9]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4041[i + 0]) );
  }
  i4030.materialFlags = i4040
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4045 = data
  i4044.name = i4045[0]
  i4044.value = i4045[1]
  return i4044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4049 = data
  i4048.name = i4049[0]
  i4048.value = new pc.Color(i4049[1], i4049[2], i4049[3], i4049[4])
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4053 = data
  i4052.name = i4053[0]
  i4052.value = new pc.Vec4( i4053[1], i4053[2], i4053[3], i4053[4] )
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4057 = data
  i4056.name = i4057[0]
  request.r(i4057[1], i4057[2], 0, i4056, 'value')
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4061 = data
  i4060.name = i4061[0]
  i4060.enabled = !!i4061[1]
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4063 = data
  i4062.name = i4063[0]
  i4062.index = i4063[1]
  i4062.startup = !!i4063[2]
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4065 = data
  i4064.aspect = i4065[0]
  i4064.orthographic = !!i4065[1]
  i4064.orthographicSize = i4065[2]
  i4064.backgroundColor = new pc.Color(i4065[3], i4065[4], i4065[5], i4065[6])
  i4064.nearClipPlane = i4065[7]
  i4064.farClipPlane = i4065[8]
  i4064.fieldOfView = i4065[9]
  i4064.depth = i4065[10]
  i4064.clearFlags = i4065[11]
  i4064.cullingMask = i4065[12]
  i4064.rect = i4065[13]
  request.r(i4065[14], i4065[15], 0, i4064, 'targetTexture')
  i4064.usePhysicalProperties = !!i4065[16]
  i4064.focalLength = i4065[17]
  i4064.sensorSize = new pc.Vec2( i4065[18], i4065[19] )
  i4064.lensShift = new pc.Vec2( i4065[20], i4065[21] )
  i4064.gateFit = i4065[22]
  i4064.commandBufferCount = i4065[23]
  i4064.cameraType = i4065[24]
  i4064.enabled = !!i4065[25]
  return i4064
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i4066 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i4067 = data
  i4066.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i4067[0] )
  i4066.m_MaxRayIntersections = i4067[1]
  return i4066
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4068 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4069 = data
  request.r(i4069[0], i4069[1], 0, i4068, 'm_FirstSelected')
  i4068.m_sendNavigationEvents = !!i4069[2]
  i4068.m_DragThreshold = i4069[3]
  return i4068
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4070 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4071 = data
  i4070.m_HorizontalAxis = i4071[0]
  i4070.m_VerticalAxis = i4071[1]
  i4070.m_SubmitButton = i4071[2]
  i4070.m_CancelButton = i4071[3]
  i4070.m_InputActionsPerSecond = i4071[4]
  i4070.m_RepeatDelay = i4071[5]
  i4070.m_ForceModuleActive = !!i4071[6]
  i4070.m_SendPointerHoverToParent = !!i4071[7]
  return i4070
}

Deserializers["Project.GameManager"] = function (request, data, root) {
  var i4072 = root || request.c( 'Project.GameManager' )
  var i4073 = data
  request.r(i4073[0], i4073[1], 0, i4072, '_tutorialManager')
  request.r(i4073[2], i4073[3], 0, i4072, '_packshot')
  i4072._firstTutorialDelay = i4073[4]
  i4072._repeatedTutorialDelay = i4073[5]
  var i4075 = i4073[6]
  var i4074 = []
  for(var i = 0; i < i4075.length; i += 2) {
  request.r(i4075[i + 0], i4075[i + 1], 2, i4074, '')
  }
  i4072._draggableHexes = i4074
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4079 = data
  i4078.pivot = new pc.Vec2( i4079[0], i4079[1] )
  i4078.anchorMin = new pc.Vec2( i4079[2], i4079[3] )
  i4078.anchorMax = new pc.Vec2( i4079[4], i4079[5] )
  i4078.sizeDelta = new pc.Vec2( i4079[6], i4079[7] )
  i4078.anchoredPosition3D = new pc.Vec3( i4079[8], i4079[9], i4079[10] )
  i4078.rotation = new pc.Quat(i4079[11], i4079[12], i4079[13], i4079[14])
  i4078.scale = new pc.Vec3( i4079[15], i4079[16], i4079[17] )
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4081 = data
  i4080.planeDistance = i4081[0]
  i4080.referencePixelsPerUnit = i4081[1]
  i4080.isFallbackOverlay = !!i4081[2]
  i4080.renderMode = i4081[3]
  i4080.renderOrder = i4081[4]
  i4080.sortingLayerName = i4081[5]
  i4080.sortingOrder = i4081[6]
  i4080.scaleFactor = i4081[7]
  request.r(i4081[8], i4081[9], 0, i4080, 'worldCamera')
  i4080.overrideSorting = !!i4081[10]
  i4080.pixelPerfect = !!i4081[11]
  i4080.targetDisplay = i4081[12]
  i4080.overridePixelPerfect = !!i4081[13]
  i4080.enabled = !!i4081[14]
  return i4080
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4082 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4083 = data
  i4082.m_UiScaleMode = i4083[0]
  i4082.m_ReferencePixelsPerUnit = i4083[1]
  i4082.m_ScaleFactor = i4083[2]
  i4082.m_ReferenceResolution = new pc.Vec2( i4083[3], i4083[4] )
  i4082.m_ScreenMatchMode = i4083[5]
  i4082.m_MatchWidthOrHeight = i4083[6]
  i4082.m_PhysicalUnit = i4083[7]
  i4082.m_FallbackScreenDPI = i4083[8]
  i4082.m_DefaultSpriteDPI = i4083[9]
  i4082.m_DynamicPixelsPerUnit = i4083[10]
  i4082.m_PresetInfoIsWorld = !!i4083[11]
  return i4082
}

Deserializers["Project.TutorialManager"] = function (request, data, root) {
  var i4084 = root || request.c( 'Project.TutorialManager' )
  var i4085 = data
  request.r(i4085[0], i4085[1], 0, i4084, '_animation')
  request.r(i4085[2], i4085[3], 0, i4084, '_hand')
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i4087 = data
  i4086.playAutomatically = !!i4087[0]
  request.r(i4087[1], i4087[2], 0, i4086, 'clip')
  var i4089 = i4087[3]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 2) {
  request.r(i4089[i + 0], i4089[i + 1], 2, i4088, '')
  }
  i4086.clips = i4088
  i4086.wrapMode = i4087[4]
  i4086.enabled = !!i4087[5]
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4093 = data
  i4092.cullTransparentMesh = !!i4093[0]
  return i4092
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4094 = root || request.c( 'UnityEngine.UI.Image' )
  var i4095 = data
  request.r(i4095[0], i4095[1], 0, i4094, 'm_Sprite')
  i4094.m_Type = i4095[2]
  i4094.m_PreserveAspect = !!i4095[3]
  i4094.m_FillCenter = !!i4095[4]
  i4094.m_FillMethod = i4095[5]
  i4094.m_FillAmount = i4095[6]
  i4094.m_FillClockwise = !!i4095[7]
  i4094.m_FillOrigin = i4095[8]
  i4094.m_UseSpriteMesh = !!i4095[9]
  i4094.m_PixelsPerUnitMultiplier = i4095[10]
  request.r(i4095[11], i4095[12], 0, i4094, 'm_Material')
  i4094.m_Maskable = !!i4095[13]
  i4094.m_Color = new pc.Color(i4095[14], i4095[15], i4095[16], i4095[17])
  i4094.m_RaycastTarget = !!i4095[18]
  i4094.m_RaycastPadding = new pc.Vec4( i4095[19], i4095[20], i4095[21], i4095[22] )
  return i4094
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4096 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4097 = data
  i4096.m_IgnoreReversedGraphics = !!i4097[0]
  i4096.m_BlockingObjects = i4097[1]
  i4096.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4097[2] )
  return i4096
}

Deserializers["Project.Packshot"] = function (request, data, root) {
  var i4098 = root || request.c( 'Project.Packshot' )
  var i4099 = data
  request.r(i4099[0], i4099[1], 0, i4098, '_canvasGroup')
  request.r(i4099[2], i4099[3], 0, i4098, '_playNow')
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4101 = data
  i4100.m_Alpha = i4101[0]
  i4100.m_Interactable = !!i4101[1]
  i4100.m_BlocksRaycasts = !!i4101[2]
  i4100.m_IgnoreParentGroups = !!i4101[3]
  i4100.enabled = !!i4101[4]
  return i4100
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4102 = root || request.c( 'UnityEngine.UI.Button' )
  var i4103 = data
  i4102.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4103[0], i4102.m_OnClick)
  i4102.m_Navigation = request.d('UnityEngine.UI.Navigation', i4103[1], i4102.m_Navigation)
  i4102.m_Transition = i4103[2]
  i4102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4103[3], i4102.m_Colors)
  i4102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4103[4], i4102.m_SpriteState)
  i4102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4103[5], i4102.m_AnimationTriggers)
  i4102.m_Interactable = !!i4103[6]
  request.r(i4103[7], i4103[8], 0, i4102, 'm_TargetGraphic')
  return i4102
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4104 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4105 = data
  i4104.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4105[0], i4104.m_PersistentCalls)
  return i4104
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4106 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4107 = data
  var i4109 = i4107[0]
  var i4108 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.add(request.d('UnityEngine.Events.PersistentCall', i4109[i + 0]));
  }
  i4106.m_Calls = i4108
  return i4106
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4112 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4113 = data
  request.r(i4113[0], i4113[1], 0, i4112, 'm_Target')
  i4112.m_TargetAssemblyTypeName = i4113[2]
  i4112.m_MethodName = i4113[3]
  i4112.m_Mode = i4113[4]
  i4112.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4113[5], i4112.m_Arguments)
  i4112.m_CallState = i4113[6]
  return i4112
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4114 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4115 = data
  i4114.m_Mode = i4115[0]
  i4114.m_WrapAround = !!i4115[1]
  request.r(i4115[2], i4115[3], 0, i4114, 'm_SelectOnUp')
  request.r(i4115[4], i4115[5], 0, i4114, 'm_SelectOnDown')
  request.r(i4115[6], i4115[7], 0, i4114, 'm_SelectOnLeft')
  request.r(i4115[8], i4115[9], 0, i4114, 'm_SelectOnRight')
  return i4114
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4116 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4117 = data
  i4116.m_NormalColor = new pc.Color(i4117[0], i4117[1], i4117[2], i4117[3])
  i4116.m_HighlightedColor = new pc.Color(i4117[4], i4117[5], i4117[6], i4117[7])
  i4116.m_PressedColor = new pc.Color(i4117[8], i4117[9], i4117[10], i4117[11])
  i4116.m_SelectedColor = new pc.Color(i4117[12], i4117[13], i4117[14], i4117[15])
  i4116.m_DisabledColor = new pc.Color(i4117[16], i4117[17], i4117[18], i4117[19])
  i4116.m_ColorMultiplier = i4117[20]
  i4116.m_FadeDuration = i4117[21]
  return i4116
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4118 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, 'm_HighlightedSprite')
  request.r(i4119[2], i4119[3], 0, i4118, 'm_PressedSprite')
  request.r(i4119[4], i4119[5], 0, i4118, 'm_SelectedSprite')
  request.r(i4119[6], i4119[7], 0, i4118, 'm_DisabledSprite')
  return i4118
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4120 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4121 = data
  i4120.m_NormalTrigger = i4121[0]
  i4120.m_HighlightedTrigger = i4121[1]
  i4120.m_PressedTrigger = i4121[2]
  i4120.m_SelectedTrigger = i4121[3]
  i4120.m_DisabledTrigger = i4121[4]
  return i4120
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4122 = root || request.c( 'UnityEngine.UI.Text' )
  var i4123 = data
  i4122.m_FontData = request.d('UnityEngine.UI.FontData', i4123[0], i4122.m_FontData)
  i4122.m_Text = i4123[1]
  request.r(i4123[2], i4123[3], 0, i4122, 'm_Material')
  i4122.m_Maskable = !!i4123[4]
  i4122.m_Color = new pc.Color(i4123[5], i4123[6], i4123[7], i4123[8])
  i4122.m_RaycastTarget = !!i4123[9]
  i4122.m_RaycastPadding = new pc.Vec4( i4123[10], i4123[11], i4123[12], i4123[13] )
  return i4122
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4124 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4125 = data
  request.r(i4125[0], i4125[1], 0, i4124, 'm_Font')
  i4124.m_FontSize = i4125[2]
  i4124.m_FontStyle = i4125[3]
  i4124.m_BestFit = !!i4125[4]
  i4124.m_MinSize = i4125[5]
  i4124.m_MaxSize = i4125[6]
  i4124.m_Alignment = i4125[7]
  i4124.m_AlignByGeometry = !!i4125[8]
  i4124.m_RichText = !!i4125[9]
  i4124.m_HorizontalOverflow = i4125[10]
  i4124.m_VerticalOverflow = i4125[11]
  i4124.m_LineSpacing = i4125[12]
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4127 = data
  i4126.type = i4127[0]
  i4126.color = new pc.Color(i4127[1], i4127[2], i4127[3], i4127[4])
  i4126.cullingMask = i4127[5]
  i4126.intensity = i4127[6]
  i4126.range = i4127[7]
  i4126.spotAngle = i4127[8]
  i4126.shadows = i4127[9]
  i4126.shadowNormalBias = i4127[10]
  i4126.shadowBias = i4127[11]
  i4126.shadowStrength = i4127[12]
  i4126.shadowResolution = i4127[13]
  i4126.lightmapBakeType = i4127[14]
  i4126.renderMode = i4127[15]
  request.r(i4127[16], i4127[17], 0, i4126, 'cookie')
  i4126.cookieSize = i4127[18]
  i4126.shadowNearPlane = i4127[19]
  i4126.occlusionMaskChannel = i4127[20]
  i4126.isBaked = !!i4127[21]
  i4126.mixedLightingMode = i4127[22]
  i4126.enabled = !!i4127[23]
  return i4126
}

Deserializers["Project.HexManager"] = function (request, data, root) {
  var i4128 = root || request.c( 'Project.HexManager' )
  var i4129 = data
  request.r(i4129[0], i4129[1], 0, i4128, '_gameManager')
  i4128._positionStep = i4129[2]
  i4128._positionOffset = i4129[3]
  i4128._singleTileTransitionDuration = i4129[4]
  i4128._singleTileTransitionSuspend = i4129[5]
  i4128._tileStackTransitionDelay = i4129[6]
  i4128._timeMultiplierEveryStack = i4129[7]
  i4128._tileJumpHeight = i4129[8]
  i4128._collapseDuration = i4129[9]
  i4128._collapseDelay = i4129[10]
  i4128._delayAfterCollapse = i4129[11]
  var i4131 = i4129[12]
  var i4130 = []
  for(var i = 0; i < i4131.length; i += 4) {
    i4130.push( new pc.Color(i4131[i + 0], i4131[i + 1], i4131[i + 2], i4131[i + 3]) );
  }
  i4128._particlesColors = i4130
  request.r(i4129[13], i4129[14], 0, i4128, '_cameraTransform')
  i4128._cameraShakeDuration = i4129[15]
  i4128._cameraShakePower = i4129[16]
  i4128._cameraShakeVibrato = i4129[17]
  return i4128
}

Deserializers["Project.Hex"] = function (request, data, root) {
  var i4134 = root || request.c( 'Project.Hex' )
  var i4135 = data
  var i4137 = i4135[0]
  var i4136 = new (System.Collections.Generic.List$1(Bridge.ns('Project.Hex')))
  for(var i = 0; i < i4137.length; i += 2) {
  request.r(i4137[i + 0], i4137[i + 1], 1, i4136, '')
  }
  i4134.Neighbours = i4136
  var i4139 = i4135[1]
  var i4138 = new (System.Collections.Generic.List$1(Bridge.ns('Project.HexTile')))
  for(var i = 0; i < i4139.length; i += 2) {
  request.r(i4139[i + 0], i4139[i + 1], 1, i4138, '')
  }
  i4134.Tiles = i4138
  request.r(i4135[2], i4135[3], 0, i4134, 'DisappearParticles')
  return i4134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4143 = data
  i4142.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4143[0], i4142.main)
  i4142.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4143[1], i4142.colorBySpeed)
  i4142.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4143[2], i4142.colorOverLifetime)
  i4142.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4143[3], i4142.emission)
  i4142.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4143[4], i4142.rotationBySpeed)
  i4142.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4143[5], i4142.rotationOverLifetime)
  i4142.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4143[6], i4142.shape)
  i4142.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4143[7], i4142.sizeBySpeed)
  i4142.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4143[8], i4142.sizeOverLifetime)
  i4142.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4143[9], i4142.textureSheetAnimation)
  i4142.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4143[10], i4142.velocityOverLifetime)
  i4142.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4143[11], i4142.noise)
  i4142.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4143[12], i4142.inheritVelocity)
  i4142.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4143[13], i4142.forceOverLifetime)
  i4142.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4143[14], i4142.limitVelocityOverLifetime)
  i4142.useAutoRandomSeed = !!i4143[15]
  i4142.randomSeed = i4143[16]
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4144 = root || new pc.ParticleSystemMain()
  var i4145 = data
  i4144.duration = i4145[0]
  i4144.loop = !!i4145[1]
  i4144.prewarm = !!i4145[2]
  i4144.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[3], i4144.startDelay)
  i4144.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[4], i4144.startLifetime)
  i4144.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[5], i4144.startSpeed)
  i4144.startSize3D = !!i4145[6]
  i4144.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[7], i4144.startSizeX)
  i4144.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[8], i4144.startSizeY)
  i4144.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[9], i4144.startSizeZ)
  i4144.startRotation3D = !!i4145[10]
  i4144.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[11], i4144.startRotationX)
  i4144.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[12], i4144.startRotationY)
  i4144.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[13], i4144.startRotationZ)
  i4144.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4145[14], i4144.startColor)
  i4144.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4145[15], i4144.gravityModifier)
  i4144.simulationSpace = i4145[16]
  request.r(i4145[17], i4145[18], 0, i4144, 'customSimulationSpace')
  i4144.simulationSpeed = i4145[19]
  i4144.useUnscaledTime = !!i4145[20]
  i4144.scalingMode = i4145[21]
  i4144.playOnAwake = !!i4145[22]
  i4144.maxParticles = i4145[23]
  i4144.emitterVelocityMode = i4145[24]
  i4144.stopAction = i4145[25]
  return i4144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4146 = root || new pc.MinMaxCurve()
  var i4147 = data
  i4146.mode = i4147[0]
  i4146.curveMin = new pc.AnimationCurve( { keys_flow: i4147[1] } )
  i4146.curveMax = new pc.AnimationCurve( { keys_flow: i4147[2] } )
  i4146.curveMultiplier = i4147[3]
  i4146.constantMin = i4147[4]
  i4146.constantMax = i4147[5]
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4148 = root || new pc.MinMaxGradient()
  var i4149 = data
  i4148.mode = i4149[0]
  i4148.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4149[1], i4148.gradientMin)
  i4148.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4149[2], i4148.gradientMax)
  i4148.colorMin = new pc.Color(i4149[3], i4149[4], i4149[5], i4149[6])
  i4148.colorMax = new pc.Color(i4149[7], i4149[8], i4149[9], i4149[10])
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4151 = data
  i4150.mode = i4151[0]
  var i4153 = i4151[1]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4153[i + 0]) );
  }
  i4150.colorKeys = i4152
  var i4155 = i4151[2]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4155[i + 0]) );
  }
  i4150.alphaKeys = i4154
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4156 = root || new pc.ParticleSystemColorBySpeed()
  var i4157 = data
  i4156.enabled = !!i4157[0]
  i4156.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4157[1], i4156.color)
  i4156.range = new pc.Vec2( i4157[2], i4157[3] )
  return i4156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4161 = data
  i4160.color = new pc.Color(i4161[0], i4161[1], i4161[2], i4161[3])
  i4160.time = i4161[4]
  return i4160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4165 = data
  i4164.alpha = i4165[0]
  i4164.time = i4165[1]
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4166 = root || new pc.ParticleSystemColorOverLifetime()
  var i4167 = data
  i4166.enabled = !!i4167[0]
  i4166.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4167[1], i4166.color)
  return i4166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4168 = root || new pc.ParticleSystemEmitter()
  var i4169 = data
  i4168.enabled = !!i4169[0]
  i4168.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4169[1], i4168.rateOverTime)
  i4168.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4169[2], i4168.rateOverDistance)
  var i4171 = i4169[3]
  var i4170 = []
  for(var i = 0; i < i4171.length; i += 1) {
    i4170.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4171[i + 0]) );
  }
  i4168.bursts = i4170
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4174 = root || new pc.ParticleSystemBurst()
  var i4175 = data
  i4174.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4175[0], i4174.count)
  i4174.cycleCount = i4175[1]
  i4174.minCount = i4175[2]
  i4174.maxCount = i4175[3]
  i4174.repeatInterval = i4175[4]
  i4174.time = i4175[5]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4176 = root || new pc.ParticleSystemRotationBySpeed()
  var i4177 = data
  i4176.enabled = !!i4177[0]
  i4176.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4177[1], i4176.x)
  i4176.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4177[2], i4176.y)
  i4176.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4177[3], i4176.z)
  i4176.separateAxes = !!i4177[4]
  i4176.range = new pc.Vec2( i4177[5], i4177[6] )
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4178 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4179 = data
  i4178.enabled = !!i4179[0]
  i4178.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4179[1], i4178.x)
  i4178.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4179[2], i4178.y)
  i4178.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4179[3], i4178.z)
  i4178.separateAxes = !!i4179[4]
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4180 = root || new pc.ParticleSystemShape()
  var i4181 = data
  i4180.enabled = !!i4181[0]
  i4180.shapeType = i4181[1]
  i4180.randomDirectionAmount = i4181[2]
  i4180.sphericalDirectionAmount = i4181[3]
  i4180.randomPositionAmount = i4181[4]
  i4180.alignToDirection = !!i4181[5]
  i4180.radius = i4181[6]
  i4180.radiusMode = i4181[7]
  i4180.radiusSpread = i4181[8]
  i4180.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4181[9], i4180.radiusSpeed)
  i4180.radiusThickness = i4181[10]
  i4180.angle = i4181[11]
  i4180.length = i4181[12]
  i4180.boxThickness = new pc.Vec3( i4181[13], i4181[14], i4181[15] )
  i4180.meshShapeType = i4181[16]
  request.r(i4181[17], i4181[18], 0, i4180, 'mesh')
  request.r(i4181[19], i4181[20], 0, i4180, 'meshRenderer')
  request.r(i4181[21], i4181[22], 0, i4180, 'skinnedMeshRenderer')
  i4180.useMeshMaterialIndex = !!i4181[23]
  i4180.meshMaterialIndex = i4181[24]
  i4180.useMeshColors = !!i4181[25]
  i4180.normalOffset = i4181[26]
  i4180.arc = i4181[27]
  i4180.arcMode = i4181[28]
  i4180.arcSpread = i4181[29]
  i4180.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4181[30], i4180.arcSpeed)
  i4180.donutRadius = i4181[31]
  i4180.position = new pc.Vec3( i4181[32], i4181[33], i4181[34] )
  i4180.rotation = new pc.Vec3( i4181[35], i4181[36], i4181[37] )
  i4180.scale = new pc.Vec3( i4181[38], i4181[39], i4181[40] )
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4182 = root || new pc.ParticleSystemSizeBySpeed()
  var i4183 = data
  i4182.enabled = !!i4183[0]
  i4182.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4183[1], i4182.x)
  i4182.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4183[2], i4182.y)
  i4182.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4183[3], i4182.z)
  i4182.separateAxes = !!i4183[4]
  i4182.range = new pc.Vec2( i4183[5], i4183[6] )
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4184 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4185 = data
  i4184.enabled = !!i4185[0]
  i4184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[1], i4184.x)
  i4184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[2], i4184.y)
  i4184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4185[3], i4184.z)
  i4184.separateAxes = !!i4185[4]
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4186 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4187 = data
  i4186.enabled = !!i4187[0]
  i4186.mode = i4187[1]
  i4186.animation = i4187[2]
  i4186.numTilesX = i4187[3]
  i4186.numTilesY = i4187[4]
  i4186.useRandomRow = !!i4187[5]
  i4186.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4187[6], i4186.frameOverTime)
  i4186.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4187[7], i4186.startFrame)
  i4186.cycleCount = i4187[8]
  i4186.rowIndex = i4187[9]
  i4186.flipU = i4187[10]
  i4186.flipV = i4187[11]
  i4186.spriteCount = i4187[12]
  var i4189 = i4187[13]
  var i4188 = []
  for(var i = 0; i < i4189.length; i += 2) {
  request.r(i4189[i + 0], i4189[i + 1], 2, i4188, '')
  }
  i4186.sprites = i4188
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4192 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4193 = data
  i4192.enabled = !!i4193[0]
  i4192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[1], i4192.x)
  i4192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[2], i4192.y)
  i4192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[3], i4192.z)
  i4192.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[4], i4192.radial)
  i4192.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[5], i4192.speedModifier)
  i4192.space = i4193[6]
  i4192.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[7], i4192.orbitalX)
  i4192.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[8], i4192.orbitalY)
  i4192.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[9], i4192.orbitalZ)
  i4192.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[10], i4192.orbitalOffsetX)
  i4192.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[11], i4192.orbitalOffsetY)
  i4192.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4193[12], i4192.orbitalOffsetZ)
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4194 = root || new pc.ParticleSystemNoise()
  var i4195 = data
  i4194.enabled = !!i4195[0]
  i4194.separateAxes = !!i4195[1]
  i4194.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[2], i4194.strengthX)
  i4194.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[3], i4194.strengthY)
  i4194.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[4], i4194.strengthZ)
  i4194.frequency = i4195[5]
  i4194.damping = !!i4195[6]
  i4194.octaveCount = i4195[7]
  i4194.octaveMultiplier = i4195[8]
  i4194.octaveScale = i4195[9]
  i4194.quality = i4195[10]
  i4194.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[11], i4194.scrollSpeed)
  i4194.scrollSpeedMultiplier = i4195[12]
  i4194.remapEnabled = !!i4195[13]
  i4194.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[14], i4194.remapX)
  i4194.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[15], i4194.remapY)
  i4194.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[16], i4194.remapZ)
  i4194.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[17], i4194.positionAmount)
  i4194.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[18], i4194.rotationAmount)
  i4194.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4195[19], i4194.sizeAmount)
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4196 = root || new pc.ParticleSystemInheritVelocity()
  var i4197 = data
  i4196.enabled = !!i4197[0]
  i4196.mode = i4197[1]
  i4196.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4197[2], i4196.curve)
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4198 = root || new pc.ParticleSystemForceOverLifetime()
  var i4199 = data
  i4198.enabled = !!i4199[0]
  i4198.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4199[1], i4198.x)
  i4198.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4199[2], i4198.y)
  i4198.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4199[3], i4198.z)
  i4198.space = i4199[4]
  i4198.randomized = !!i4199[5]
  return i4198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4200 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4201 = data
  i4200.enabled = !!i4201[0]
  i4200.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[1], i4200.limit)
  i4200.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[2], i4200.limitX)
  i4200.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[3], i4200.limitY)
  i4200.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[4], i4200.limitZ)
  i4200.dampen = i4201[5]
  i4200.separateAxes = !!i4201[6]
  i4200.space = i4201[7]
  i4200.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4201[8], i4200.drag)
  i4200.multiplyDragByParticleSize = !!i4201[9]
  i4200.multiplyDragByParticleVelocity = !!i4201[10]
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4203 = data
  request.r(i4203[0], i4203[1], 0, i4202, 'mesh')
  i4202.meshCount = i4203[2]
  i4202.activeVertexStreamsCount = i4203[3]
  i4202.alignment = i4203[4]
  i4202.renderMode = i4203[5]
  i4202.sortMode = i4203[6]
  i4202.lengthScale = i4203[7]
  i4202.velocityScale = i4203[8]
  i4202.cameraVelocityScale = i4203[9]
  i4202.normalDirection = i4203[10]
  i4202.sortingFudge = i4203[11]
  i4202.minParticleSize = i4203[12]
  i4202.maxParticleSize = i4203[13]
  i4202.pivot = new pc.Vec3( i4203[14], i4203[15], i4203[16] )
  request.r(i4203[17], i4203[18], 0, i4202, 'trailMaterial')
  i4202.applyActiveColorSpace = !!i4203[19]
  i4202.enabled = !!i4203[20]
  request.r(i4203[21], i4203[22], 0, i4202, 'sharedMaterial')
  var i4205 = i4203[23]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 2) {
  request.r(i4205[i + 0], i4205[i + 1], 2, i4204, '')
  }
  i4202.sharedMaterials = i4204
  i4202.receiveShadows = !!i4203[24]
  i4202.shadowCastingMode = i4203[25]
  i4202.sortingLayerID = i4203[26]
  i4202.sortingOrder = i4203[27]
  i4202.lightmapIndex = i4203[28]
  i4202.lightmapSceneIndex = i4203[29]
  i4202.lightmapScaleOffset = new pc.Vec4( i4203[30], i4203[31], i4203[32], i4203[33] )
  i4202.lightProbeUsage = i4203[34]
  i4202.reflectionProbeUsage = i4203[35]
  return i4202
}

Deserializers["Project.HexDropTarget"] = function (request, data, root) {
  var i4206 = root || request.c( 'Project.HexDropTarget' )
  var i4207 = data
  request.r(i4207[0], i4207[1], 0, i4206, '_hexManager')
  request.r(i4207[2], i4207[3], 0, i4206, '_placeOnHex')
  i4206._moveDuration = i4207[4]
  i4206._fallDuration = i4207[5]
  i4206._hexActivateDelay = i4207[6]
  return i4206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i4209 = data
  i4208.center = new pc.Vec3( i4209[0], i4209[1], i4209[2] )
  i4208.radius = i4209[3]
  i4208.enabled = !!i4209[4]
  i4208.isTrigger = !!i4209[5]
  request.r(i4209[6], i4209[7], 0, i4208, 'material')
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i4211 = data
  request.r(i4211[0], i4211[1], 0, i4210, 'sharedMesh')
  i4210.convex = !!i4211[2]
  i4210.enabled = !!i4211[3]
  i4210.isTrigger = !!i4211[4]
  request.r(i4211[5], i4211[6], 0, i4210, 'material')
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4213 = data
  i4212.ambientIntensity = i4213[0]
  i4212.reflectionIntensity = i4213[1]
  i4212.ambientMode = i4213[2]
  i4212.ambientLight = new pc.Color(i4213[3], i4213[4], i4213[5], i4213[6])
  i4212.ambientSkyColor = new pc.Color(i4213[7], i4213[8], i4213[9], i4213[10])
  i4212.ambientGroundColor = new pc.Color(i4213[11], i4213[12], i4213[13], i4213[14])
  i4212.ambientEquatorColor = new pc.Color(i4213[15], i4213[16], i4213[17], i4213[18])
  i4212.fogColor = new pc.Color(i4213[19], i4213[20], i4213[21], i4213[22])
  i4212.fogEndDistance = i4213[23]
  i4212.fogStartDistance = i4213[24]
  i4212.fogDensity = i4213[25]
  i4212.fog = !!i4213[26]
  request.r(i4213[27], i4213[28], 0, i4212, 'skybox')
  i4212.fogMode = i4213[29]
  var i4215 = i4213[30]
  var i4214 = []
  for(var i = 0; i < i4215.length; i += 1) {
    i4214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4215[i + 0]) );
  }
  i4212.lightmaps = i4214
  i4212.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4213[31], i4212.lightProbes)
  i4212.lightmapsMode = i4213[32]
  i4212.mixedBakeMode = i4213[33]
  i4212.environmentLightingMode = i4213[34]
  i4212.ambientProbe = new pc.SphericalHarmonicsL2(i4213[35])
  request.r(i4213[36], i4213[37], 0, i4212, 'customReflection')
  request.r(i4213[38], i4213[39], 0, i4212, 'defaultReflection')
  i4212.defaultReflectionMode = i4213[40]
  i4212.defaultReflectionResolution = i4213[41]
  i4212.sunLightObjectId = i4213[42]
  i4212.pixelLightCount = i4213[43]
  i4212.defaultReflectionHDR = !!i4213[44]
  i4212.hasLightDataAsset = !!i4213[45]
  i4212.hasManualGenerate = !!i4213[46]
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4219 = data
  request.r(i4219[0], i4219[1], 0, i4218, 'lightmapColor')
  request.r(i4219[2], i4219[3], 0, i4218, 'lightmapDirection')
  request.r(i4219[4], i4219[5], 0, i4218, 'shadowMask')
  return i4218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4220 = root || new UnityEngine.LightProbes()
  var i4221 = data
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4229 = data
  var i4231 = i4229[0]
  var i4230 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4231.length; i += 1) {
    i4230.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4231[i + 0]));
  }
  i4228.ShaderCompilationErrors = i4230
  i4228.name = i4229[1]
  i4228.guid = i4229[2]
  var i4233 = i4229[3]
  var i4232 = []
  for(var i = 0; i < i4233.length; i += 1) {
    i4232.push( i4233[i + 0] );
  }
  i4228.shaderDefinedKeywords = i4232
  var i4235 = i4229[4]
  var i4234 = []
  for(var i = 0; i < i4235.length; i += 1) {
    i4234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4235[i + 0]) );
  }
  i4228.passes = i4234
  var i4237 = i4229[5]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4237[i + 0]) );
  }
  i4228.usePasses = i4236
  var i4239 = i4229[6]
  var i4238 = []
  for(var i = 0; i < i4239.length; i += 1) {
    i4238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4239[i + 0]) );
  }
  i4228.defaultParameterValues = i4238
  request.r(i4229[7], i4229[8], 0, i4228, 'unityFallbackShader')
  i4228.readDepth = !!i4229[9]
  i4228.hasDepthOnlyPass = !!i4229[10]
  i4228.isCreatedByShaderGraph = !!i4229[11]
  i4228.disableBatching = !!i4229[12]
  i4228.compiled = !!i4229[13]
  return i4228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4243 = data
  i4242.shaderName = i4243[0]
  i4242.errorMessage = i4243[1]
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4248 = root || new pc.UnityShaderPass()
  var i4249 = data
  i4248.id = i4249[0]
  i4248.subShaderIndex = i4249[1]
  i4248.name = i4249[2]
  i4248.passType = i4249[3]
  i4248.grabPassTextureName = i4249[4]
  i4248.usePass = !!i4249[5]
  i4248.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[6], i4248.zTest)
  i4248.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[7], i4248.zWrite)
  i4248.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[8], i4248.culling)
  i4248.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4249[9], i4248.blending)
  i4248.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4249[10], i4248.alphaBlending)
  i4248.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[11], i4248.colorWriteMask)
  i4248.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[12], i4248.offsetUnits)
  i4248.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[13], i4248.offsetFactor)
  i4248.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[14], i4248.stencilRef)
  i4248.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[15], i4248.stencilReadMask)
  i4248.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4249[16], i4248.stencilWriteMask)
  i4248.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4249[17], i4248.stencilOp)
  i4248.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4249[18], i4248.stencilOpFront)
  i4248.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4249[19], i4248.stencilOpBack)
  var i4251 = i4249[20]
  var i4250 = []
  for(var i = 0; i < i4251.length; i += 1) {
    i4250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4251[i + 0]) );
  }
  i4248.tags = i4250
  var i4253 = i4249[21]
  var i4252 = []
  for(var i = 0; i < i4253.length; i += 1) {
    i4252.push( i4253[i + 0] );
  }
  i4248.passDefinedKeywords = i4252
  var i4255 = i4249[22]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4255[i + 0]) );
  }
  i4248.passDefinedKeywordGroups = i4254
  var i4257 = i4249[23]
  var i4256 = []
  for(var i = 0; i < i4257.length; i += 1) {
    i4256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4257[i + 0]) );
  }
  i4248.variants = i4256
  var i4259 = i4249[24]
  var i4258 = []
  for(var i = 0; i < i4259.length; i += 1) {
    i4258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4259[i + 0]) );
  }
  i4248.excludedVariants = i4258
  i4248.hasDepthReader = !!i4249[25]
  return i4248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4261 = data
  i4260.val = i4261[0]
  i4260.name = i4261[1]
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4263 = data
  i4262.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4263[0], i4262.src)
  i4262.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4263[1], i4262.dst)
  i4262.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4263[2], i4262.op)
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4265 = data
  i4264.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4265[0], i4264.pass)
  i4264.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4265[1], i4264.fail)
  i4264.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4265[2], i4264.zFail)
  i4264.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4265[3], i4264.comp)
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4269 = data
  i4268.name = i4269[0]
  i4268.value = i4269[1]
  return i4268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4273 = data
  var i4275 = i4273[0]
  var i4274 = []
  for(var i = 0; i < i4275.length; i += 1) {
    i4274.push( i4275[i + 0] );
  }
  i4272.keywords = i4274
  i4272.hasDiscard = !!i4273[1]
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4279 = data
  i4278.passId = i4279[0]
  i4278.subShaderIndex = i4279[1]
  var i4281 = i4279[2]
  var i4280 = []
  for(var i = 0; i < i4281.length; i += 1) {
    i4280.push( i4281[i + 0] );
  }
  i4278.keywords = i4280
  i4278.vertexProgram = i4279[3]
  i4278.fragmentProgram = i4279[4]
  i4278.exportedForWebGl2 = !!i4279[5]
  i4278.readDepth = !!i4279[6]
  return i4278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4285 = data
  request.r(i4285[0], i4285[1], 0, i4284, 'shader')
  i4284.pass = i4285[2]
  return i4284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4289 = data
  i4288.name = i4289[0]
  i4288.type = i4289[1]
  i4288.value = new pc.Vec4( i4289[2], i4289[3], i4289[4], i4289[5] )
  i4288.textureValue = i4289[6]
  i4288.shaderPropertyFlag = i4289[7]
  return i4288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4291 = data
  i4290.name = i4291[0]
  request.r(i4291[1], i4291[2], 0, i4290, 'texture')
  i4290.aabb = i4291[3]
  i4290.vertices = i4291[4]
  i4290.triangles = i4291[5]
  i4290.textureRect = UnityEngine.Rect.MinMaxRect(i4291[6], i4291[7], i4291[8], i4291[9])
  i4290.packedRect = UnityEngine.Rect.MinMaxRect(i4291[10], i4291[11], i4291[12], i4291[13])
  i4290.border = new pc.Vec4( i4291[14], i4291[15], i4291[16], i4291[17] )
  i4290.transparency = i4291[18]
  i4290.bounds = i4291[19]
  i4290.pixelsPerUnit = i4291[20]
  i4290.textureWidth = i4291[21]
  i4290.textureHeight = i4291[22]
  i4290.nativeSize = new pc.Vec2( i4291[23], i4291[24] )
  i4290.pivot = new pc.Vec2( i4291[25], i4291[26] )
  i4290.textureRectOffset = new pc.Vec2( i4291[27], i4291[28] )
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4293 = data
  i4292.name = i4293[0]
  i4292.wrapMode = i4293[1]
  i4292.isLooping = !!i4293[2]
  i4292.length = i4293[3]
  var i4295 = i4293[4]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4295[i + 0]) );
  }
  i4292.curves = i4294
  var i4297 = i4293[5]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 1) {
    i4296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4297[i + 0]) );
  }
  i4292.events = i4296
  i4292.halfPrecision = !!i4293[6]
  i4292._frameRate = i4293[7]
  i4292.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4293[8], i4292.localBounds)
  i4292.hasMuscleCurves = !!i4293[9]
  var i4299 = i4293[10]
  var i4298 = []
  for(var i = 0; i < i4299.length; i += 1) {
    i4298.push( i4299[i + 0] );
  }
  i4292.clipMuscleConstant = i4298
  i4292.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4293[11], i4292.clipBindingConstant)
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4303 = data
  i4302.path = i4303[0]
  i4302.hash = i4303[1]
  i4302.componentType = i4303[2]
  i4302.property = i4303[3]
  i4302.keys = i4303[4]
  var i4305 = i4303[5]
  var i4304 = []
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4305[i + 0]) );
  }
  i4302.objectReferenceKeys = i4304
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4309 = data
  i4308.time = i4309[0]
  request.r(i4309[1], i4309[2], 0, i4308, 'value')
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4313 = data
  i4312.functionName = i4313[0]
  i4312.floatParameter = i4313[1]
  i4312.intParameter = i4313[2]
  i4312.stringParameter = i4313[3]
  request.r(i4313[4], i4313[5], 0, i4312, 'objectReferenceParameter')
  i4312.time = i4313[6]
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4315 = data
  i4314.center = new pc.Vec3( i4315[0], i4315[1], i4315[2] )
  i4314.extends = new pc.Vec3( i4315[3], i4315[4], i4315[5] )
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4319 = data
  var i4321 = i4319[0]
  var i4320 = []
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.push( i4321[i + 0] );
  }
  i4318.genericBindings = i4320
  var i4323 = i4319[1]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( i4323[i + 0] );
  }
  i4318.pptrCurveMapping = i4322
  return i4318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4325 = data
  i4324.name = i4325[0]
  i4324.ascent = i4325[1]
  i4324.originalLineHeight = i4325[2]
  i4324.fontSize = i4325[3]
  var i4327 = i4325[4]
  var i4326 = []
  for(var i = 0; i < i4327.length; i += 1) {
    i4326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4327[i + 0]) );
  }
  i4324.characterInfo = i4326
  request.r(i4325[5], i4325[6], 0, i4324, 'texture')
  i4324.originalFontSize = i4325[7]
  return i4324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4331 = data
  i4330.index = i4331[0]
  i4330.advance = i4331[1]
  i4330.bearing = i4331[2]
  i4330.glyphWidth = i4331[3]
  i4330.glyphHeight = i4331[4]
  i4330.minX = i4331[5]
  i4330.maxX = i4331[6]
  i4330.minY = i4331[7]
  i4330.maxY = i4331[8]
  i4330.uvBottomLeftX = i4331[9]
  i4330.uvBottomLeftY = i4331[10]
  i4330.uvBottomRightX = i4331[11]
  i4330.uvBottomRightY = i4331[12]
  i4330.uvTopLeftX = i4331[13]
  i4330.uvTopLeftY = i4331[14]
  i4330.uvTopRightX = i4331[15]
  i4330.uvTopRightY = i4331[16]
  return i4330
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4332 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4333 = data
  i4332.useSafeMode = !!i4333[0]
  i4332.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4333[1], i4332.safeModeOptions)
  i4332.timeScale = i4333[2]
  i4332.unscaledTimeScale = i4333[3]
  i4332.useSmoothDeltaTime = !!i4333[4]
  i4332.maxSmoothUnscaledTime = i4333[5]
  i4332.rewindCallbackMode = i4333[6]
  i4332.showUnityEditorReport = !!i4333[7]
  i4332.logBehaviour = i4333[8]
  i4332.drawGizmos = !!i4333[9]
  i4332.defaultRecyclable = !!i4333[10]
  i4332.defaultAutoPlay = i4333[11]
  i4332.defaultUpdateType = i4333[12]
  i4332.defaultTimeScaleIndependent = !!i4333[13]
  i4332.defaultEaseType = i4333[14]
  i4332.defaultEaseOvershootOrAmplitude = i4333[15]
  i4332.defaultEasePeriod = i4333[16]
  i4332.defaultAutoKill = !!i4333[17]
  i4332.defaultLoopType = i4333[18]
  i4332.debugMode = !!i4333[19]
  i4332.debugStoreTargetId = !!i4333[20]
  i4332.showPreviewPanel = !!i4333[21]
  i4332.storeSettingsLocation = i4333[22]
  i4332.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4333[23], i4332.modules)
  i4332.createASMDEF = !!i4333[24]
  i4332.showPlayingTweens = !!i4333[25]
  i4332.showPausedTweens = !!i4333[26]
  return i4332
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4334 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4335 = data
  i4334.logBehaviour = i4335[0]
  i4334.nestedTweenFailureBehaviour = i4335[1]
  return i4334
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4336 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4337 = data
  i4336.showPanel = !!i4337[0]
  i4336.audioEnabled = !!i4337[1]
  i4336.physicsEnabled = !!i4337[2]
  i4336.physics2DEnabled = !!i4337[3]
  i4336.spriteEnabled = !!i4337[4]
  i4336.uiEnabled = !!i4337[5]
  i4336.textMeshProEnabled = !!i4337[6]
  i4336.tk2DEnabled = !!i4337[7]
  i4336.deAudioEnabled = !!i4337[8]
  i4336.deUnityExtendedEnabled = !!i4337[9]
  i4336.epoOutlineEnabled = !!i4337[10]
  return i4336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4339 = data
  var i4341 = i4339[0]
  var i4340 = []
  for(var i = 0; i < i4341.length; i += 1) {
    i4340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4341[i + 0]) );
  }
  i4338.files = i4340
  i4338.componentToPrefabIds = i4339[1]
  return i4338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4345 = data
  i4344.path = i4345[0]
  request.r(i4345[1], i4345[2], 0, i4344, 'unityObject')
  return i4344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4347 = data
  var i4349 = i4347[0]
  var i4348 = []
  for(var i = 0; i < i4349.length; i += 1) {
    i4348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4349[i + 0]) );
  }
  i4346.scriptsExecutionOrder = i4348
  var i4351 = i4347[1]
  var i4350 = []
  for(var i = 0; i < i4351.length; i += 1) {
    i4350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4351[i + 0]) );
  }
  i4346.sortingLayers = i4350
  var i4353 = i4347[2]
  var i4352 = []
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4353[i + 0]) );
  }
  i4346.cullingLayers = i4352
  i4346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4347[3], i4346.timeSettings)
  i4346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4347[4], i4346.physicsSettings)
  i4346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4347[5], i4346.physics2DSettings)
  i4346.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4347[6], i4346.qualitySettings)
  i4346.enableRealtimeShadows = !!i4347[7]
  i4346.enableAutoInstancing = !!i4347[8]
  i4346.enableStaticBatching = !!i4347[9]
  i4346.enableDynamicBatching = !!i4347[10]
  i4346.usePreservativeDynamicBatching = !!i4347[11]
  i4346.lightmapEncodingQuality = i4347[12]
  i4346.desiredColorSpace = i4347[13]
  var i4355 = i4347[14]
  var i4354 = []
  for(var i = 0; i < i4355.length; i += 1) {
    i4354.push( i4355[i + 0] );
  }
  i4346.allTags = i4354
  return i4346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4359 = data
  i4358.name = i4359[0]
  i4358.value = i4359[1]
  return i4358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4363 = data
  i4362.id = i4363[0]
  i4362.name = i4363[1]
  i4362.value = i4363[2]
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4367 = data
  i4366.id = i4367[0]
  i4366.name = i4367[1]
  return i4366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4369 = data
  i4368.fixedDeltaTime = i4369[0]
  i4368.maximumDeltaTime = i4369[1]
  i4368.timeScale = i4369[2]
  i4368.maximumParticleTimestep = i4369[3]
  return i4368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4371 = data
  i4370.gravity = new pc.Vec3( i4371[0], i4371[1], i4371[2] )
  i4370.defaultSolverIterations = i4371[3]
  i4370.bounceThreshold = i4371[4]
  i4370.autoSyncTransforms = !!i4371[5]
  i4370.autoSimulation = !!i4371[6]
  var i4373 = i4371[7]
  var i4372 = []
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4373[i + 0]) );
  }
  i4370.collisionMatrix = i4372
  return i4370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4377 = data
  i4376.enabled = !!i4377[0]
  i4376.layerId = i4377[1]
  i4376.otherLayerId = i4377[2]
  return i4376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4379 = data
  request.r(i4379[0], i4379[1], 0, i4378, 'material')
  i4378.gravity = new pc.Vec2( i4379[2], i4379[3] )
  i4378.positionIterations = i4379[4]
  i4378.velocityIterations = i4379[5]
  i4378.velocityThreshold = i4379[6]
  i4378.maxLinearCorrection = i4379[7]
  i4378.maxAngularCorrection = i4379[8]
  i4378.maxTranslationSpeed = i4379[9]
  i4378.maxRotationSpeed = i4379[10]
  i4378.baumgarteScale = i4379[11]
  i4378.baumgarteTOIScale = i4379[12]
  i4378.timeToSleep = i4379[13]
  i4378.linearSleepTolerance = i4379[14]
  i4378.angularSleepTolerance = i4379[15]
  i4378.defaultContactOffset = i4379[16]
  i4378.autoSimulation = !!i4379[17]
  i4378.queriesHitTriggers = !!i4379[18]
  i4378.queriesStartInColliders = !!i4379[19]
  i4378.callbacksOnDisable = !!i4379[20]
  i4378.reuseCollisionCallbacks = !!i4379[21]
  i4378.autoSyncTransforms = !!i4379[22]
  var i4381 = i4379[23]
  var i4380 = []
  for(var i = 0; i < i4381.length; i += 1) {
    i4380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4381[i + 0]) );
  }
  i4378.collisionMatrix = i4380
  return i4378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4385 = data
  i4384.enabled = !!i4385[0]
  i4384.layerId = i4385[1]
  i4384.otherLayerId = i4385[2]
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4387 = data
  var i4389 = i4387[0]
  var i4388 = []
  for(var i = 0; i < i4389.length; i += 1) {
    i4388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4389[i + 0]) );
  }
  i4386.qualityLevels = i4388
  var i4391 = i4387[1]
  var i4390 = []
  for(var i = 0; i < i4391.length; i += 1) {
    i4390.push( i4391[i + 0] );
  }
  i4386.names = i4390
  i4386.shadows = i4387[2]
  i4386.anisotropicFiltering = i4387[3]
  i4386.antiAliasing = i4387[4]
  i4386.lodBias = i4387[5]
  i4386.shadowCascades = i4387[6]
  i4386.shadowDistance = i4387[7]
  i4386.shadowmaskMode = i4387[8]
  i4386.shadowProjection = i4387[9]
  i4386.shadowResolution = i4387[10]
  i4386.softParticles = !!i4387[11]
  i4386.softVegetation = !!i4387[12]
  i4386.activeColorSpace = i4387[13]
  i4386.desiredColorSpace = i4387[14]
  i4386.masterTextureLimit = i4387[15]
  i4386.maxQueuedFrames = i4387[16]
  i4386.particleRaycastBudget = i4387[17]
  i4386.pixelLightCount = i4387[18]
  i4386.realtimeReflectionProbes = !!i4387[19]
  i4386.shadowCascade2Split = i4387[20]
  i4386.shadowCascade4Split = new pc.Vec3( i4387[21], i4387[22], i4387[23] )
  i4386.streamingMipmapsActive = !!i4387[24]
  i4386.vSyncCount = i4387[25]
  i4386.asyncUploadBufferSize = i4387[26]
  i4386.asyncUploadTimeSlice = i4387[27]
  i4386.billboardsFaceCameraPosition = !!i4387[28]
  i4386.shadowNearPlaneOffset = i4387[29]
  i4386.streamingMipmapsMemoryBudget = i4387[30]
  i4386.maximumLODLevel = i4387[31]
  i4386.streamingMipmapsAddAllCameras = !!i4387[32]
  i4386.streamingMipmapsMaxLevelReduction = i4387[33]
  i4386.streamingMipmapsRenderersPerFrame = i4387[34]
  i4386.resolutionScalingFixedDPIFactor = i4387[35]
  i4386.streamingMipmapsMaxFileIORequests = i4387[36]
  i4386.currentQualityLevel = i4387[37]
  return i4386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4397 = data
  i4396.weight = i4397[0]
  i4396.vertices = i4397[1]
  i4396.normals = i4397[2]
  i4396.tangents = i4397[3]
  return i4396
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4398 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4399 = data
  request.r(i4399[0], i4399[1], 0, i4398, 'm_ObjectArgument')
  i4398.m_ObjectArgumentAssemblyTypeName = i4399[2]
  i4398.m_IntArgument = i4399[3]
  i4398.m_FloatArgument = i4399[4]
  i4398.m_StringArgument = i4399[5]
  i4398.m_BoolArgument = !!i4399[6]
  return i4398
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

Deserializers.buildID = "c99034c3-6a31-48f9-ad07-07f4ab367867";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

